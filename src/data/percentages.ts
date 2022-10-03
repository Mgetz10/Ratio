import { BakersPercentage, FormulaType, Ingredient } from '../globals/types';

export const bakersPercentages: BakersPercentage[] = [
	{
		name: 'ciabatta',
		formula: [
			{ ingredient: Ingredient.FLOUR, amount: 1 },
			{ ingredient: Ingredient.WATER, amount: 0.76 },
		],
	},
].map(formula => ({ ...formula, type: FormulaType.BAKERS_PERCENTAGE }));
