import { ascending } from 'd3';
import { cloneDeep } from 'lodash';
import { Ingredients, Ratio } from './types';

type GetIngredientAmount = (ratio: Ratio, ingredient: Ingredients) => number;

export const getIngredientPercentage: GetIngredientAmount = (
	ratio,
	ingredient
) => {
	const total = ratio.ratio.reduce((acc, { amount }) => acc + amount, 0);
	const amount =
		ratio.ratio.find(({ name }) => name === ingredient)?.amount || 0;

	return amount / total;
};

type SortRatiosBy = (ratios: Ratio[], sortBy: Ingredients) => Ratio[];

export const sortRatiosBy: SortRatiosBy = (ratios, sortBy) =>
	cloneDeep(ratios)
		.sort(
			(a, b) =>
				getIngredientPercentage(b, sortBy) - getIngredientPercentage(a, sortBy)
		)
		.map(r => {
			const sortedRatio = r.ratio
				.sort((a, b) => ascending(a.name, b.name))
				.sort((a, b) => (a.name === sortBy ? -1 : b.name === sortBy ? 1 : 0));

			return Object.assign(
				{},
				{
					...r,
					ratio: sortedRatio
				}
			);
		});

export const slug = (string: string) => string.split(' ').join('-');
