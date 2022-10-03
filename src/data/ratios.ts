import { FormulaType, Ingredient, Ratio } from '../globals/types';

export const ratios: Ratio[] = [
	{
		name: 'bread',
		formula: [
			{ ingredient: Ingredient.FLOUR, amount: 5 },
			{ ingredient: Ingredient.WATER, amount: 3 },
		],
	},
	{
		name: 'pasta dough',
		formula: [
			{ ingredient: Ingredient.FLOUR, amount: 3 },
			{ ingredient: Ingredient.EGG, amount: 2 },
		],
	},
	{
		name: 'pie dough',
		formula: [
			{ ingredient: Ingredient.FLOUR, amount: 3 },
			{ ingredient: Ingredient.FAT, amount: 2 },
			{ ingredient: Ingredient.WATER, amount: 1 },
		],
	},
	{
		name: 'biscuit',
		formula: [
			{ ingredient: Ingredient.FLOUR, amount: 3 },
			{ ingredient: Ingredient.FAT, amount: 1 },
			{ ingredient: Ingredient.LIQUID, amount: 2 },
		],
	},
	{
		name: 'cookie dough',
		formula: [
			{ ingredient: Ingredient.SUGAR, amount: 1 },
			{ ingredient: Ingredient.FAT, amount: 2 },
			{ ingredient: Ingredient.FLOUR, amount: 3 },
		],
	},
	{
		name: 'pâte à choux',
		formula: [
			{ ingredient: Ingredient.WATER, amount: 2 },
			{ ingredient: Ingredient.BUTTER, amount: 1 },
			{ ingredient: Ingredient.FLOUR, amount: 1 },
			{ ingredient: Ingredient.EGG, amount: 2 },
		],
	},
	{
		name: 'pound cake',
		formula: [
			{ ingredient: Ingredient.BUTTER, amount: 1 },
			{ ingredient: Ingredient.SUGAR, amount: 1 },
			{ ingredient: Ingredient.EGG, amount: 1 },
			{ ingredient: Ingredient.FLOUR, amount: 1 },
		],
	},
	{
		name: 'sponge cake',
		formula: [
			{ ingredient: Ingredient.EGG, amount: 1 },
			{ ingredient: Ingredient.SUGAR, amount: 1 },
			{ ingredient: Ingredient.FLOUR, amount: 1 },
			{ ingredient: Ingredient.BUTTER, amount: 1 },
		],
	},
	{
		name: 'angel food cake',
		formula: [
			{ ingredient: Ingredient.EGG_WHITE, amount: 3 },
			{ ingredient: Ingredient.SUGAR, amount: 3 },
			{ ingredient: Ingredient.FLOUR, amount: 1 },
		],
	},
	{
		name: 'quick bread',
		formula: [
			{ ingredient: Ingredient.FLOUR, amount: 2 },
			{ ingredient: Ingredient.LIQUID, amount: 2 },
			{ ingredient: Ingredient.EGG, amount: 1 },
			{ ingredient: Ingredient.BUTTER, amount: 1 },
		],
	},
	{
		name: 'muffin',
		formula: [
			{ ingredient: Ingredient.FLOUR, amount: 2 },
			{ ingredient: Ingredient.LIQUID, amount: 2 },
			{ ingredient: Ingredient.EGG, amount: 1 },
			{ ingredient: Ingredient.BUTTER, amount: 1 },
		],
	},
	{
		name: 'fritter',
		formula: [
			{ ingredient: Ingredient.FLOUR, amount: 2 },
			{ ingredient: Ingredient.LIQUID, amount: 2 },
			{ ingredient: Ingredient.EGG, amount: 1 },
		],
	},
	{
		name: 'pancake',
		formula: [
			{ ingredient: Ingredient.FLOUR, amount: 2 },
			{ ingredient: Ingredient.LIQUID, amount: 2 },
			{ ingredient: Ingredient.EGG, amount: 1 },
			{ ingredient: Ingredient.BUTTER, amount: 0.5 },
		],
	},
	{
		name: 'popover',
		formula: [
			{ ingredient: Ingredient.LIQUID, amount: 2 },
			{ ingredient: Ingredient.EGG, amount: 1 },
			{ ingredient: Ingredient.FLOUR, amount: 1 },
		],
	},
	{
		name: 'crepe',
		formula: [
			{ ingredient: Ingredient.LIQUID, amount: 1 },
			{ ingredient: Ingredient.EGG, amount: 1 },
			{ ingredient: Ingredient.FLOUR, amount: 0.5 },
		],
	},
].map(formula => ({ ...formula, type: FormulaType.RATIO }));
