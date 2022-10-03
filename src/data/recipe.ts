import { FormulaType, Ingredient, Recipe, UnitType } from '../globals/types';

export const recipes: Recipe[] = [
	{
		name: 'udon',
		formula: [
			{ ingredient: Ingredient.FLOUR, amount: 200, unitType: UnitType.G },
			{ ingredient: Ingredient.WATER, amount: 90, unitType: UnitType.ML },
		],
	},
].map(formula => ({ ...formula, type: FormulaType.RECIPE }));
