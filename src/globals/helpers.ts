import { ascending, descending } from 'd3';
import { cloneDeep } from 'lodash';
import { i, unit, gcd } from 'mathjs';
import { VizStyle } from '../components/FormulaComparison/types';
import {
  Ingredient,
  BakersPercentage,
  Formula,
  FormulaType,
  Recipe,
  UnitType,
  RecipeIngredient,
  GraphFormula,
  FormulaIngredient,
} from './types';

type GetRatioIngredientPercentage = (
  formula: Formula,
  ingredient: Ingredient,
) => number;

export const getRatioIngredientPercentage: GetRatioIngredientPercentage = (
  ratio,
  ingredient,
) => {
  const total = ratio.formula.reduce((acc, { amount }) => acc + amount, 0);
  const amount =
    ratio.formula.find(({ ingredient: name }) => name === ingredient)?.amount ||
    0;

  return amount / total;
};

type SortFormulasBy = (
  formulas: Formula[],
  sortBy: Ingredient,
  vizStyle: VizStyle,
  combineFlour: boolean,
  simplify: boolean,
  roundLevel?: number,
) => Formula[];

export const sortFormulasBy: SortFormulasBy = (
  formulas,
  sortBy,
  vizStyle,
  combineFlour,
  simplify,
  roundLevel = 10,
) => {
  const invert = vizStyle === VizStyle.STACKED_BAR_SIDEWAYS;

  return cloneDeep(formulas)
    .map((r) => {
      const combinedFormula = combineFlour
        ? combineSimilarIngredients(r.formula)
        : r.formula;
      const simplifiedFormula = simplifyFormula(
        combinedFormula,
        simplify ? roundLevel : 100,
      );
      return {
        ...r,
        formula: simplifiedFormula,
      };
    })
    .sort(
      (a, b) =>
        getRatioIngredientPercentage(b, sortBy) -
        getRatioIngredientPercentage(a, sortBy),
    )
    .map((r) => {
      const sortMap = [
        ...(sortBy ? [sortBy] : []),
        ...Object.values(Ingredient).filter((key) => key !== sortBy),
      ].reduce((acc, value, i) => {
        acc[value as Ingredient] = i;
        return acc;
      }, {} as Record<Ingredient, number>);

      const sortedFormula = r.formula.sort((a, b) =>
        descending(
          sortMap[a.ingredient as Ingredient],
          sortMap[b.ingredient as Ingredient],
        ),
      );

      return Object.assign(
        {},
        {
          ...r,
          ratio: sortedFormula,
        },
      );
    });
};

export const slug = (string: string) => string.split(' ').join('-');

export const bakersPercentageToRatio = (
  bakersPercentage: BakersPercentage,
) => {};

export const toGraphFormula = (formula: Formula) => {
  //convert numbers to same unit
  const normalizedFormula = normalizeUnits(formula);
  //get total
  const total = normalizedFormula.formula.reduce(
    (acc, { amount }) => acc + amount,
    0,
  );

  return {
    ...normalizedFormula,
    total,
  } as GraphFormula;
};

export const normalizeUnits = (formula: Formula) => {
  let result;
  switch (formula.type) {
    case FormulaType.RATIO:
      result = formula;
      break;
    case FormulaType.BAKERS_PERCENTAGE:
      result = formula;
      break;
    case FormulaType.RECIPE:
      result = normalizeRecipe(formula as Recipe);
      break;
  }
  return result as Formula;
};

export const normalizeRecipe = (
  recipe: Recipe,
  toUnit: UnitType = UnitType.G,
) => {
  return {
    ...recipe,
    formula: recipe.formula.map((recipeIngredient) =>
      ingredientUnitTo(recipeIngredient, toUnit),
    ),
  };
};

export const isVolume = (unitType: UnitType) => {
  switch (unitType) {
    case UnitType.ML:
      return true;
    default:
      return false;
  }
};

//move to data validation
export const isConvertibleToWeight = (ingredient: Ingredient) => {
  switch (ingredient) {
    case Ingredient.WATER:
      return true;
    default:
      return false;
  }
};

export const volumeToGrams = (recipeIngredient: RecipeIngredient) => {
  const { ingredient } = recipeIngredient;
  switch (ingredient) {
    case Ingredient.WATER:
      return { ...recipeIngredient, unitType: UnitType.G };
  }
};

export const ingredientUnitTo = (
  recipeIngredient: RecipeIngredient,
  toUnit: UnitType,
) => {
  const { amount, unitType } = recipeIngredient;

  let convertedResult;

  if (isVolume(unitType)) convertedResult = volumeToGrams(recipeIngredient);
  else convertedResult = unit(amount, unitType).to(toUnit).toNumber;

  return {
    ...recipeIngredient,
    amount: convertedResult,
    unitType: UnitType,
  };
};

export const combineMap = {
  [Ingredient.FLOUR]: [
    Ingredient.RYE_FLOUR,
    Ingredient.WHOLE_WHEAT_FLOUR,
    Ingredient.DURUM_FLOUR,
  ],
  [Ingredient.FAT]: [Ingredient.BUTTER, Ingredient.OIL],
  [Ingredient.SUGAR]: [Ingredient.HONEY],
  [Ingredient.DRIED_INGREDIENTS]: [
    Ingredient.DRIED_FRUIT,
    Ingredient.NUTS,
    Ingredient.SEEDS,
  ],
  [Ingredient.LIQUID]: [Ingredient.WATER],
  [Ingredient.EGG]: [Ingredient.EGG_WHITE, Ingredient.EGG_YOLK],
};

export const combineSimilarIngredients = (formula: FormulaIngredient[]) =>
  formula
    .map((i) => {
      const altIngredient = Object.entries(combineMap).find(([key, value]) =>
        value.includes(i.ingredient as Ingredient),
      )?.[0] as Ingredient;

      if (!altIngredient) return i;

      return {
        ...i,
        ingredient: altIngredient,
      };
    })
    .reduce((acc, curr) => {
      const existing = acc.find((i) => i.ingredient === curr.ingredient);
      if (!existing) return [...acc, curr] as RecipeIngredient[];
      existing.amount += curr.amount;
      return acc;
    }, [] as RecipeIngredient[]);

// simplify formulas ingredient amounts
// 25 and 50 would become 1 and 2
const simplifyFormula = (formula: FormulaIngredient[], roundLevel: number) => {
  const amounts = formula.map(({ amount }) => amount);
  const simplified = approximateRatio(amounts, roundLevel);

  return formula.map((f, i) => ({
    ...f,
    amount: simplified[i],
  }));
};
/**
 * approximateRatio
 *
 * @param {number[]} numbers  An array of positive numbers to be turned into a ratio.
 * @param {number}   total    The desired sum (or scale) of the final ratio.
 * @returns {number[]}        An integer ratio whose elements sum to `total`.
 *
 * Example:
 *   approximateRatio([50, 100], 0) -> [1,2]
 *   approximateRatio([50, 26, 11], 17) -> [10, 5, 2]
 *   approximateRatio([50, 26, 11], 9)  -> [5,  3, 1]
 */
function approximateRatio(numbers: number[], total: number): number[] {
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  if (sum === 0) {
    // Edge case: all zeros
    return Array(numbers.length).fill(0);
  }

  // First, scale each element to float so that they sum to `total`.
  const scaled = numbers.map((n) => (n * total) / sum);

  // Naively round each scaled value.
  const result = scaled.map((x) => Math.round(x));

  // Check if rounding errors caused the sum to deviate from `total`.
  let leftover = total - result.reduce((acc, n) => acc + n, 0);

  // Distribute any leftover (positive or negative) by adjusting
  // items with the largest fractional parts first, to keep ratio close.
  if (leftover !== 0) {
    // Store fractional parts along with original indices.
    const fractionalParts = scaled.map((val, idx) => [
      val - Math.floor(val),
      idx,
    ]);

    // Sort descending by fractional part (so biggest fraction gets leftover first).
    fractionalParts.sort((a, b) => b[0] - a[0]);

    let i = 0;
    // If leftover > 0, we add 1 to the items with the largest fractional part.
    // If leftover < 0, we subtract 1 from those items (as long as they're > 0).
    while (leftover !== 0 && i < fractionalParts.length) {
      const idx = fractionalParts[i][1];
      if (leftover > 0) {
        result[idx] += 1;
        leftover--;
      } else if (leftover < 0 && result[idx] > 0) {
        result[idx] -= 1;
        leftover++;
      }
      i++;
    }
  }

  const gcdReduced = result.map((n) => n / gcd(...result));

  return gcdReduced[0] > numbers[0] ? numbers : gcdReduced;
}
