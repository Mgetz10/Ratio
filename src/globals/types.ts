export enum Ingredient {
  FLOUR = 'flour',
  RYE_FLOUR = 'rye flour',
  WHOLE_WHEAT_FLOUR = 'whole wheat flour',
  DURUM_FLOUR = 'durum flour',
  WATER = 'water',
  LIQUID = 'liquid',
  SUGAR = 'sugar',
  HONEY = 'honey',
  FAT = 'fat',
  BUTTER = 'butter',
  OIL = 'oil',
  EGG = 'egg',
  EGG_WHITE = 'egg white',
  EGG_YOLK = 'egg yolk',
  NUTS = 'nuts',
  SEEDS = 'seeds',
  GRAINS = 'grains',
  DRIED_FRUIT = 'dried fruit',
  DRIED_INGREDIENTS = 'dried ingredients',
  SALT = 'salt',
  YEAST = 'yeast',
  FRESH_YEAST = 'fresh yeast',
}

export enum FormulaType {
  RATIO = 'ratio',
  BAKERS_PERCENTAGE = 'bakers percentage',
  RECIPE = 'recipe',
}

export enum Tags {
  BREAD = 'bread',
  FLATBREAD = 'flatbread',
  PASTRY = 'pastry',
  PASTA = 'pasta',
  PIE_TART_SHELL = 'pie/tart shell',
  SWEET = 'sweet',
  SAVORY = 'savory',
  BATTER = 'batter',
  DOUGH = 'dough',
  CAKE = 'cake',
  COOKIE = 'cookie',
  BISCUIT = 'biscuit',
  PRETZEL = 'pretzel',
  BAGUETTE = 'baguette',
}

export enum UnitType {
  OZ = 'oz',
  G = 'g',
  ML = 'ml',
}

export interface Formula {
  name: string;
  formula: FormulaIngredient[];
  type: FormulaType;
}

export interface FormulaIngredient {
  ingredient: Ingredient | string;
  amount: number;
}

export interface GraphFormula {
  name: string;
  total: number;
  formula: GraphIngredient[];
}

export interface GraphIngredient extends FormulaIngredient {}

export interface Ratio {
  name: string;
  formula: RatioIngredient[];
  type: FormulaType.RATIO;
  tags?: Tags[];
}

export interface RatioIngredient extends FormulaIngredient {}

export interface BakersPercentage {
  name: string;
  formula: BakersPercentageIngredient[];
  type: FormulaType.BAKERS_PERCENTAGE;
}

export interface BakersPercentageIngredient extends FormulaIngredient {}

export interface Recipe {
  name: string;
  formula: RecipeIngredient[];
  type: FormulaType.RECIPE;
}
export interface RecipeIngredient extends FormulaIngredient {
  unitType: UnitType;
}
