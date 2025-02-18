import {
  BakersPercentage,
  FormulaType,
  Ingredient,
  Ratio,
  Tags,
} from '../globals/types';

export const bakersPercentages: Ratio[] = [
  {
    name: 'Bavarian Pretzels',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 100,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 56,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 1.8,
      },
      {
        ingredient: Ingredient.YEAST,
        amount: 1.25,
      },
      {
        ingredient: 'Diastatic Malt',
        amount: 2,
      },
      {
        ingredient: Ingredient.BUTTER,
        amount: 5,
      },
    ],
  },
  {
    name: 'Brioche',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 100,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2.5,
      },
      {
        ingredient: Ingredient.SUGAR,
        amount: 12,
      },
      {
        ingredient: Ingredient.BUTTER,
        amount: 50,
      },
      {
        ingredient: Ingredient.YEAST,
        amount: 7,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 9,
      },
      {
        ingredient: Ingredient.EGG,
        amount: 50,
      },
    ],
  },
  {
    name: 'Ciabatta',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 100,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 76,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2,
      },
      {
        ingredient: Ingredient.YEAST,
        amount: 1.2,
      },
    ],
  },
  {
    name: 'Citrus Vollkornbrot',
    formula: [
      {
        ingredient: Ingredient.RYE_FLOUR,
        amount: 100,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 85,
      },
      {
        ingredient: 'Rye Chops',
        amount: 20,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2.1,
      },
      {
        ingredient: Ingredient.YEAST,
        amount: 2.3,
      },
      {
        ingredient: Ingredient.HONEY,
        amount: 6,
      },
      {
        ingredient: 'Fresh Ground Coriander',
        amount: 0.75,
      },
      {
        ingredient: Ingredient.DRIED_FRUIT,
        amount: 18.5,
      },
    ],
  },
  {
    name: 'Deli Rye',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 80,
      },
      {
        ingredient: Ingredient.RYE_FLOUR,
        amount: 20,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 70,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2,
      },
      {
        ingredient: Ingredient.YEAST,
        amount: 1.25,
      },
      {
        ingredient: 'Caraway',
        amount: 1.25,
      },
    ],
  },
  {
    name: 'Five Seed Sourdough',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 75,
      },
      {
        ingredient: Ingredient.WHOLE_WHEAT_FLOUR,
        amount: 25,
      },
      {
        ingredient: Ingredient.SEEDS,
        amount: 15,
      },
      {
        ingredient: 'Oats',
        amount: 5,
      },
      {
        ingredient: 'Rye chops',
        amount: 5,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 88,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2.2,
      },
      {
        ingredient: Ingredient.YEAST,
        amount: 0.2,
      },
    ],
  },
  {
    name: 'Flax Seed Rye',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 60,
      },
      {
        ingredient: Ingredient.RYE_FLOUR,
        amount: 40,
      },
      {
        ingredient: Ingredient.SEEDS,
        amount: 10,
      },
      {
        ingredient: 'Old Bread',
        amount: 8,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 80.3,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2,
      },
      {
        ingredient: Ingredient.FRESH_YEAST,
        amount: 1.3,
      },
    ],
  },
  {
    name: 'French Bread with Poolish',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 100,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 67,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2,
      },
      {
        ingredient: Ingredient.YEAST,
        amount: 1.1,
      },
    ],
  },
  {
    name: 'Grissini',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 100,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 52,
      },
      {
        ingredient: Ingredient.FAT,
        amount: 12,
      },
      {
        ingredient: Ingredient.BUTTER,
        amount: 10,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2,
      },
      {
        ingredient: Ingredient.FRESH_YEAST,
        amount: 3,
      },
    ],
  },
  {
    name: 'Harpoon Miche',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 80,
      },
      {
        ingredient: Ingredient.RYE_FLOUR,
        amount: 15,
      },
      {
        ingredient: Ingredient.WHOLE_WHEAT_FLOUR,
        amount: 5,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 50,
      },
      {
        ingredient: 'Dark Beer',
        amount: 30,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2,
      },
      {
        ingredient: Ingredient.YEAST,
        amount: 0.4,
      },
      {
        ingredient: 'Liquid Levain culture',
        amount: 0.25,
      },
      {
        ingredient: 'Rye Sourdough Culture',
        amount: 0.55,
      },
    ],
  },
  {
    name: 'Honey Rye',
    formula: [
      {
        ingredient: Ingredient.RYE_FLOUR,
        amount: 55,
      },
      {
        ingredient: Ingredient.FLOUR,
        amount: 45,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 72,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2.2,
      },
      {
        ingredient: Ingredient.YEAST,
        amount: 0.6,
      },
      {
        ingredient: Ingredient.HONEY,
        amount: 6,
      },
      {
        ingredient: 'Rye Starter',
        amount: 2.53,
      },
    ],
  },
  {
    name: "Night Moves' Anadama",
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 60,
      },
      {
        ingredient: Ingredient.WHOLE_WHEAT_FLOUR,
        amount: 40,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 92,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2.4,
      },
      {
        ingredient: 'sourdough starter',
        amount: 1.5,
      },
      {
        ingredient: 'molasses',
        amount: 7,
      },
      {
        ingredient: 'hominy',
        amount: 10,
      },
      {
        ingredient: 'grits, toasted',
        amount: 10,
      },
    ],
  },
  {
    name: 'Oatmeal Bread',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 75,
      },
      {
        ingredient: Ingredient.WHOLE_WHEAT_FLOUR,
        amount: 25,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 62.5,
      },
      {
        ingredient: Ingredient.YEAST,
        amount: 2.5,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2.3,
      },
      {
        ingredient: Ingredient.FAT,
        amount: 7.5,
      },
      {
        ingredient: Ingredient.HONEY,
        amount: 7.5,
      },
      {
        ingredient: Ingredient.LIQUID,
        amount: 11.3,
      },
      {
        ingredient: 'Thick Rolled Oats',
        amount: 16.5,
      },
    ],
  },
  {
    name: 'Old Bread Rye',
    formula: [
      {
        ingredient: Ingredient.RYE_FLOUR,
        amount: 66,
      },
      {
        ingredient: Ingredient.FLOUR,
        amount: 34,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 75,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2,
      },
      {
        ingredient: 'Old Bread**',
        amount: 10,
      },
    ],
  },
  {
    name: 'Orange Anise Rolls',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 100,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 35,
      },
      {
        ingredient: Ingredient.EGG,
        amount: 18,
      },
      {
        ingredient: Ingredient.YEAST,
        amount: 2.5,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2,
      },
      {
        ingredient: Ingredient.SUGAR,
        amount: 4,
      },
      {
        ingredient: Ingredient.HONEY,
        amount: 11,
      },
      {
        ingredient: Ingredient.BUTTER,
        amount: 15,
      },
      {
        ingredient: 'Orange Juice',
        amount: 5,
      },
      {
        ingredient: 'Anise Seed',
        amount: 1.1,
      },
      {
        ingredient: Ingredient.DRIED_FRUIT,
        amount: 20,
      },
    ],
  },
  {
    name: 'Rye Bread (66%) with Walnuts',
    formula: [
      {
        ingredient: Ingredient.RYE_FLOUR,
        amount: 66,
      },
      {
        ingredient: Ingredient.FLOUR,
        amount: 34,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 80,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 1.8,
      },
      {
        ingredient: Ingredient.NUTS,
        amount: 25,
      },
    ],
  },
  {
    name: 'Semolina Bread',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 40,
      },
      {
        ingredient: Ingredient.DURUM_FLOUR,
        amount: 60,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 72.6,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2,
      },
      {
        ingredient: 'Sesame (toasted)',
        amount: 5,
      },
    ],
  },
  {
    name: 'Slow Rise Baguettes',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 100.0,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 70.0,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2.0,
      },
      {
        ingredient: Ingredient.FRESH_YEAST,
        amount: 0.75,
      },
    ],
  },
  {
    name: 'Sourdough Baguettes',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 90,
      },
      {
        ingredient: 'High Extraction Flour',
        amount: 10,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 73,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2,
      },
      {
        ingredient: Ingredient.YEAST,
        amount: 0.2,
      },
      {
        ingredient: 'Starter',
        amount: 3.33,
      },
    ],
  },
  {
    name: 'Sourdough Rye with Walnuts',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 60,
      },
      {
        ingredient: Ingredient.RYE_FLOUR,
        amount: 40,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 70,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 1.8,
      },
      {
        ingredient: Ingredient.YEAST,
        amount: 1.25,
      },
      {
        ingredient: Ingredient.NUTS,
        amount: 25,
      },
    ],
  },
  {
    name: 'Sourdough Seed Bread',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 92,
      },
      {
        ingredient: Ingredient.RYE_FLOUR,
        amount: 8,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 73,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2.3,
      },
      {
        ingredient: Ingredient.SEEDS,
        amount: 25,
      },
    ],
  },
  {
    name: 'Sprouted Grain Batard',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 50,
      },
      {
        ingredient: Ingredient.WHOLE_WHEAT_FLOUR,
        amount: 40,
      },
      {
        ingredient: Ingredient.GRAINS,
        amount: 10,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 85,
      },
      {
        ingredient: Ingredient.HONEY,
        amount: 4,
      },
      {
        ingredient: Ingredient.FRESH_YEAST,
        amount: 1,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2,
      },
    ],
  },
  {
    name: 'Sprouted Grain Pain Rustique',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 70,
      },
      {
        ingredient: Ingredient.WHOLE_WHEAT_FLOUR,
        amount: 23,
      },
      {
        ingredient: Ingredient.GRAINS,
        amount: 7,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 80,
      },
      {
        ingredient: Ingredient.FRESH_YEAST,
        amount: 0.2,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2,
      },
      {
        ingredient: Ingredient.DRIED_FRUIT,
        amount: 30,
      },
      {
        ingredient: 'White Starter',
        amount: 2.2,
      },
    ],
  },
  {
    name: 'Sprouted Grain Pan Bread',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 20,
      },
      {
        ingredient: Ingredient.WHOLE_WHEAT_FLOUR,
        amount: 70,
      },
      {
        ingredient: Ingredient.GRAINS,
        amount: 10,
      },
      {
        ingredient: 'Vital Wheat Gluten',
        amount: 3,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 80,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2.2,
      },
      {
        ingredient: Ingredient.FRESH_YEAST,
        amount: 3,
      },
      {
        ingredient: Ingredient.FAT,
        amount: 2,
      },
      {
        ingredient: Ingredient.HONEY,
        amount: 8,
      },
    ],
  },
  {
    name: 'Sprouted Wheat Baguette',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 30,
      },
      {
        ingredient: Ingredient.FLOUR,
        amount: 20,
      },
      {
        ingredient: Ingredient.WHOLE_WHEAT_FLOUR,
        amount: 50,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 83,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2,
      },
      {
        ingredient: Ingredient.HONEY,
        amount: 1,
      },
      {
        ingredient: Ingredient.FRESH_YEAST,
        amount: 0.5,
      },
    ],
  },
  {
    name: 'Sprouted Wheat Bâtard',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 50,
      },

      {
        ingredient: Ingredient.WHOLE_WHEAT_FLOUR,
        amount: 50,
      },
      {
        ingredient: Ingredient.GRAINS,
        amount: 15,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 82,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2.2,
      },
      {
        ingredient: Ingredient.YEAST,
        amount: 0.7,
      },
      {
        ingredient: 'Liquid Levain Culture',
        amount: 2,
      },
    ],
  },
  {
    name: 'Walnut Ciabatta',
    formula: [
      {
        ingredient: Ingredient.FLOUR,
        amount: 100,
      },
      {
        ingredient: Ingredient.WATER,
        amount: 82,
      },
      {
        ingredient: Ingredient.NUTS,
        amount: 30,
      },
      {
        ingredient: Ingredient.SALT,
        amount: 2.3,
      },
      {
        ingredient: Ingredient.YEAST,
        amount: 1,
      },
      {
        ingredient: Ingredient.FAT,
        amount: 2,
      },
      {
        ingredient: 'Wheat Bran, coarse',
        amount: 2,
      },
    ],
  },
].map((bakersPercentage) => ({
  ...bakersPercentage,
  type: FormulaType.RATIO,
  tags: [Tags.BREAD],
  formula: bakersPercentage.formula.filter(
    ({ ingredient }) =>
      Object.values(Ingredient).includes(ingredient as Ingredient) &&
      ![Ingredient.SALT, Ingredient.YEAST, Ingredient.FRESH_YEAST].includes(
        ingredient as Ingredient,
      ),
  ),
}));
