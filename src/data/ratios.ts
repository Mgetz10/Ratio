import { Ingredients, Ratio } from '../globals/types';

export const ratios: Ratio[] = [
	{
		name: 'bread',
		ratio: [
			{ name: Ingredients.FLOUR, amount: 5 },
			{ name: Ingredients.WATER, amount: 1 }
		]
	},
	{
		name: 'pasta dough',
		ratio: [
			{ name: Ingredients.FLOUR, amount: 3 },
			{ name: Ingredients.EGG, amount: 2 }
		]
	},
	{
		name: 'pie dough',
		ratio: [
			{ name: Ingredients.FLOUR, amount: 3 },
			{ name: Ingredients.FAT, amount: 2 },
			{ name: Ingredients.WATER, amount: 1 }
		]
	},
	{
		name: 'biscuit',
		ratio: [
			{ name: Ingredients.FLOUR, amount: 3 },
			{ name: Ingredients.FAT, amount: 1 },
			{ name: Ingredients.LIQUID, amount: 2 }
		]
	},
	{
		name: 'cookie dough',
		ratio: [
			{ name: Ingredients.SUGAR, amount: 1 },
			{ name: Ingredients.FAT, amount: 2 },
			{ name: Ingredients.FLOUR, amount: 3 }
		]
	},
	{
		name: 'pâte à choux',
		ratio: [
			{ name: Ingredients.WATER, amount: 2 },
			{ name: Ingredients.BUTTER, amount: 1 },
			{ name: Ingredients.FLOUR, amount: 1 },
			{ name: Ingredients.EGG, amount: 2 }
		]
	},
	{
		name: 'pound cake',
		ratio: [
			{ name: Ingredients.BUTTER, amount: 1 },
			{ name: Ingredients.SUGAR, amount: 1 },
			{ name: Ingredients.EGG, amount: 1 },
			{ name: Ingredients.FLOUR, amount: 1 }
		]
	},
	{
		name: 'sponge cake',
		ratio: [
			{ name: Ingredients.EGG, amount: 1 },
			{ name: Ingredients.SUGAR, amount: 1 },
			{ name: Ingredients.FLOUR, amount: 1 },
			{ name: Ingredients.BUTTER, amount: 1 }
		]
	},
	{
		name: 'angel food cake',
		ratio: [
			{ name: Ingredients.EGG_WHITE, amount: 3 },
			{ name: Ingredients.SUGAR, amount: 3 },
			{ name: Ingredients.FLOUR, amount: 1 }
		]
	},
	{
		name: 'quick bread',
		ratio: [
			{ name: Ingredients.FLOUR, amount: 2 },
			{ name: Ingredients.LIQUID, amount: 2 },
			{ name: Ingredients.EGG, amount: 1 },
			{ name: Ingredients.BUTTER, amount: 1 }
		]
	},
	{
		name: 'muffin',
		ratio: [
			{ name: Ingredients.FLOUR, amount: 2 },
			{ name: Ingredients.LIQUID, amount: 2 },
			{ name: Ingredients.EGG, amount: 1 },
			{ name: Ingredients.BUTTER, amount: 1 }
		]
	},
	{
		name: 'fritter',
		ratio: [
			{ name: Ingredients.FLOUR, amount: 2 },
			{ name: Ingredients.LIQUID, amount: 2 },
			{ name: Ingredients.EGG, amount: 1 }
		]
	},
	{
		name: 'pancake',
		ratio: [
			{ name: Ingredients.FLOUR, amount: 2 },
			{ name: Ingredients.LIQUID, amount: 2 },
			{ name: Ingredients.EGG, amount: 1 },
			{ name: Ingredients.BUTTER, amount: 0.5 }
		]
	},
	{
		name: 'popover',
		ratio: [
			{ name: Ingredients.LIQUID, amount: 2 },
			{ name: Ingredients.EGG, amount: 1 },
			{ name: Ingredients.FLOUR, amount: 1 }
		]
	},
	{
		name: 'crepe',
		ratio: [
			{ name: Ingredients.LIQUID, amount: 1 },
			{ name: Ingredients.EGG, amount: 1 },
			{ name: Ingredients.FLOUR, amount: 0.5 }
		]
	}
];
