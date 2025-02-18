import { FormulaType, Ingredient, Ratio, Tags } from '../globals/types';

export const ratios: Ratio[] = [
  {
    name: 'bread',
    Tags: [Tags.BREAD],
    formula: [
      { ingredient: Ingredient.FLOUR, amount: 5 },
      { ingredient: Ingredient.WATER, amount: 3 },
    ],
  },
  {
    name: 'pasta dough',
    tags: [Tags.PASTA],
    formula: [
      { ingredient: Ingredient.FLOUR, amount: 3 },
      { ingredient: Ingredient.EGG, amount: 2 },
    ],
  },
  {
    name: 'pie dough',
    tags: [Tags.PIE_TART_SHELL],
    formula: [
      { ingredient: Ingredient.FLOUR, amount: 3 },
      { ingredient: Ingredient.FAT, amount: 2 },
      { ingredient: Ingredient.WATER, amount: 1 },
    ],
  },
  {
    name: 'biscuit',
    tags: [Tags.BISCUIT],
    formula: [
      { ingredient: Ingredient.FLOUR, amount: 3 },
      { ingredient: Ingredient.FAT, amount: 1 },
      { ingredient: Ingredient.LIQUID, amount: 2 },
    ],
  },
  {
    name: 'cookie dough',
    tags: [Tags.COOKIE],
    formula: [
      { ingredient: Ingredient.SUGAR, amount: 1 },
      { ingredient: Ingredient.FAT, amount: 2 },
      { ingredient: Ingredient.FLOUR, amount: 3 },
    ],
  },
  {
    name: 'pâte à choux',
    tags: [Tags.PASTRY],
    formula: [
      { ingredient: Ingredient.WATER, amount: 2 },
      { ingredient: Ingredient.BUTTER, amount: 1 },
      { ingredient: Ingredient.FLOUR, amount: 1 },
      { ingredient: Ingredient.EGG, amount: 2 },
    ],
  },
  {
    name: 'pound cake',
    tags: [Tags.CAKE],
    formula: [
      { ingredient: Ingredient.BUTTER, amount: 1 },
      { ingredient: Ingredient.SUGAR, amount: 1 },
      { ingredient: Ingredient.EGG, amount: 1 },
      { ingredient: Ingredient.FLOUR, amount: 1 },
    ],
  },
  {
    name: 'sponge cake',
    tags: [Tags.CAKE],
    formula: [
      { ingredient: Ingredient.EGG, amount: 1 },
      { ingredient: Ingredient.SUGAR, amount: 1 },
      { ingredient: Ingredient.FLOUR, amount: 1 },
      { ingredient: Ingredient.BUTTER, amount: 1 },
    ],
  },
  {
    name: 'angel food cake',
    tags: [Tags.CAKE],
    formula: [
      { ingredient: Ingredient.EGG_WHITE, amount: 3 },
      { ingredient: Ingredient.SUGAR, amount: 3 },
      { ingredient: Ingredient.FLOUR, amount: 1 },
    ],
  },
  {
    name: 'quick bread',
    tags: [Tags.BREAD],
    formula: [
      { ingredient: Ingredient.FLOUR, amount: 2 },
      { ingredient: Ingredient.LIQUID, amount: 2 },
      { ingredient: Ingredient.EGG, amount: 1 },
      { ingredient: Ingredient.BUTTER, amount: 1 },
    ],
  },
  {
    name: 'muffin',
    tags: [Tags.BATTER],
    formula: [
      { ingredient: Ingredient.FLOUR, amount: 2 },
      { ingredient: Ingredient.LIQUID, amount: 2 },
      { ingredient: Ingredient.EGG, amount: 1 },
      { ingredient: Ingredient.BUTTER, amount: 1 },
    ],
  },
  {
    name: 'fritter',
    tags: [Tags.BATTER],
    formula: [
      { ingredient: Ingredient.FLOUR, amount: 2 },
      { ingredient: Ingredient.LIQUID, amount: 2 },
      { ingredient: Ingredient.EGG, amount: 1 },
    ],
  },
  {
    name: 'pancake',
    tags: [Tags.BATTER],
    formula: [
      { ingredient: Ingredient.FLOUR, amount: 2 },
      { ingredient: Ingredient.LIQUID, amount: 2 },
      { ingredient: Ingredient.EGG, amount: 1 },
      { ingredient: Ingredient.BUTTER, amount: 0.5 },
    ],
  },
  {
    name: 'popover',
    tags: [Tags.BATTER],
    formula: [
      { ingredient: Ingredient.LIQUID, amount: 2 },
      { ingredient: Ingredient.EGG, amount: 1 },
      { ingredient: Ingredient.FLOUR, amount: 1 },
    ],
  },
  {
    name: 'crepe',
    tags: [Tags.BATTER],
    formula: [
      { ingredient: Ingredient.LIQUID, amount: 1 },
      { ingredient: Ingredient.EGG, amount: 1 },
      { ingredient: Ingredient.FLOUR, amount: 0.5 },
    ],
  },
].map((formula) => ({ ...formula, type: FormulaType.RATIO }));
