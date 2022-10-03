import { scaleOrdinal, schemeSet2 } from 'd3';
import { Ingredient } from './types';

export const allIngredients = Object.values(Ingredient);

const presetColor: string | any = {
	[Ingredient.WATER]: '#30bced',
};

export const colorMap = (ingredient: Ingredient) => {
	const unsetIngredientColors = allIngredients.filter(
		ing => !Object.keys(presetColor).includes(ing)
	);
	const hardCodedColor = presetColor[ingredient];
	const dynamicColorMap = scaleOrdinal()
		.domain(unsetIngredientColors)
		.range(schemeSet2);

	return hardCodedColor || dynamicColorMap(ingredient);
};
