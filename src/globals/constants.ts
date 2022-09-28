import {
	scaleOrdinal,
	schemeAccent,
	schemeCategory10,
	schemeSet1,
	schemeSet2
} from 'd3';
import { Ingredients } from './types';

export const allIngredients = Object.values(Ingredients);

const presetColor: string | any = {
	[Ingredients.WATER]: '#30bced'
};

export const colorMap = (ingredient: Ingredients) => {
	const unsetIngredientColors = allIngredients.filter(
		ing => !Object.keys(presetColor).includes(ing)
	);
	const hardCodedColor = presetColor[ingredient];
	const dynamicColorMap = scaleOrdinal()
		.domain(unsetIngredientColors)
		.range(schemeSet2);

	return hardCodedColor || dynamicColorMap(ingredient);
};
