export enum Ingredients {
	FLOUR = 'flour',
	SUGAR = 'sugar',
	WATER = 'water',
	LIQUID = 'liquid',
	FAT = 'fat',
	BUTTER = 'butter',
	EGG = 'egg',
	EGG_WHITE = 'egg white',
	EGG_YOLK = 'egg yolk'
}

export type Ratio = {
	name: string;
	ratio: Ingredient[];
};

export type Ingredient = {
	name: Ingredients;
	amount: number;
};
