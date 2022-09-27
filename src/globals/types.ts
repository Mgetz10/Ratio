export enum Ingredients {
	FLOUR = 'flour',
	WATER = 'water',
	EGG = 'egg',
	FAT = 'fat',
	LIQUID = 'liquid',
	SUGAR = 'sugar',
	BUTTER = 'butter',
	EGG_WHITE = 'egg white'
}

export type Ratio = {
	name: string;
	ratio: Ingredient[];
};

export type Ingredient = {
	name: Ingredients;
	amount: number;
};
