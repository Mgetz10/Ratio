import { ascending } from 'd3';
import { cloneDeep } from 'lodash';
import { unit } from 'mathjs';
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
} from './types';

type GetRatioIngredientPercentage = (
	formula: Formula,
	ingredient: Ingredient
) => number;

export const getRatioIngredientPercentage: GetRatioIngredientPercentage = (
	ratio,
	ingredient
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
	vizStyle: VizStyle
) => Formula[];

export const sortFormulasBy: SortFormulasBy = (formulas, sortBy, vizStyle) => {
	const invert = vizStyle === VizStyle.STACKED_BAR_SIDEWAYS;

	return cloneDeep(formulas)
		.sort(
			(a, b) =>
				getRatioIngredientPercentage(b, sortBy) -
				getRatioIngredientPercentage(a, sortBy)
		)
		.map(r => {
			const sortedFormula = r.formula
				.sort((a, b) => ascending(a.ingredient, b.ingredient))
				.sort((a, b) => {
					const direction = (invert: boolean) => (invert ? 1 : -1);
					return a.ingredient === sortBy
						? direction(invert)
						: b.ingredient === sortBy
						? direction(!invert)
						: 0;
				});

			return Object.assign(
				{},
				{
					...r,
					ratio: sortedFormula,
				}
			);
		});
};

export const slug = (string: string) => string.split(' ').join('-');

export const bakersPercentageToRatio = (
	bakersPercentage: BakersPercentage
) => {};

export const toGraphFormula = (formula: Formula) => {
	//convert numbers to same unit
	const normalizedFormula = normalizeUnits(formula);
	//get total
	const total = normalizedFormula.formula.reduce(
		(acc, { amount }) => acc + amount,
		0
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
	toUnit: UnitType = UnitType.G
) => {
	return {
		...recipe,
		formula: recipe.formula.map(recipeIngredient =>
			ingredientUnitTo(recipeIngredient, toUnit)
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
	toUnit: UnitType
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
