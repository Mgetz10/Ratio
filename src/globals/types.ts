export enum Ingredient {
	FLOUR = 'flour',
	SUGAR = 'sugar',
	WATER = 'water',
	LIQUID = 'liquid',
	FAT = 'fat',
	BUTTER = 'butter',
	EGG = 'egg',
	EGG_WHITE = 'egg white',
	EGG_YOLK = 'egg yolk',
}

export enum FormulaType {
	RATIO = 'ratio',
	BAKERS_PERCENTAGE = 'bakers percentage',
	RECIPE = 'recipe',
}

export type Formula = {
	name: string;
	formula: FormulaIngredient[];
	type: FormulaType;
};

export type FormulaIngredient = {
	ingredient: Ingredient;
	amount: number;
};

export type GraphFormula = {
	name: string;
	total: number;
	formula: GraphIngredient[];
};

export type GraphIngredient = FormulaIngredient;

export type Ratio = {
	name: string;
	formula: RatioIngredient[];
	type: FormulaType.RATIO;
};

export type RatioIngredient = FormulaIngredient;

export type BakersPercentage = {
	name: string;
	formula: BakersPercentageIngredient[];
	type: FormulaType.BAKERS_PERCENTAGE;
};

export type BakersPercentageIngredient = FormulaIngredient;

export type Recipe = {
	name: string;
	formula: RecipeIngredient[];
	type: FormulaType.RECIPE;
};
export interface RecipeIngredient extends FormulaIngredient {
	unitType: UnitType;
}

export enum UnitType {
	OZ = 'oz',
	G = 'g',
	ML = 'ml',
}
