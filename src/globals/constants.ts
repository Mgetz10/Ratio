import { scaleOrdinal, schemeCategory10 } from 'd3';
import { Ingredients } from './types';

export const colorMap = scaleOrdinal()
	.domain(Object.values(Ingredients))
	.range(schemeCategory10);

export const allIngredients = Object.values(Ingredients);
