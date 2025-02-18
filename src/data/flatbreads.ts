import {
  BakersPercentage,
  FormulaType,
  Ingredient,
  Ratio,
  Tags,
} from '../globals/types';

export const flatBreads: Ratio[] = [
  {
    name: 'Naan',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 250,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 160,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 3,
      },
      {
        ingredient: Ingredient.YEAST,
        amount: 4.5,
      },
      {
        ingredient: Ingredient.SUGAR,
        amount: 8,
      },
    ],
  },
  {
    name: 'Pita',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 280,
      },
      {
        ingredient: Ingredient.WHOLE_WHEAT_FLOUR,
        amount: 70,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 240,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 3,
      },
      {
        ingredient: Ingredient.SUGAR,
        amount: 13,
      },
      {
        ingredient: Ingredient.YEAST,
        amount: 7,
      },
      {
        ingredient: Ingredient.OIL,
        amount: 13,
      },
    ],
  },
  {
    name: 'Indian Roti',
    formula: [
      {
        ingredient: Ingredient.WHOLE_WHEAT_FLOUR,
        amount: 240,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 200,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 5,
      },
    ],
  },
  {
    name: 'Thai Roti',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 240,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 120,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 3,
      },
      {
        ingredient: Ingredient.SUGAR,
        amount: 12,
      },
      {
        ingredient: Ingredient.EGG,
        amount: 50,
      },
    ],
  },
].map((bakersPercentage) => ({
  ...bakersPercentage,
  type: FormulaType.RATIO,
  tags: [Tags.BREAD, Tags.FLATBREAD],
  formula: bakersPercentage.formula.filter(
    ({ ingredient }) =>
      Object.values(Ingredient).includes(ingredient as Ingredient) &&
      ![Ingredient.SALT, Ingredient.YEAST, Ingredient.FRESH_YEAST].includes(
        ingredient as Ingredient,
      ),
  ),
}));
