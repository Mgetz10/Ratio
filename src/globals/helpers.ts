import { ascending } from 'd3';
import { cloneDeep } from 'lodash';
import { RatioStyle } from '../components/RatioComparison/types';
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

type SortRatiosBy = (
	ratios: Ratio[],
	sortBy: Ingredients,
	ratioStyle: RatioStyle
) => Ratio[];

export const sortRatiosBy: SortRatiosBy = (ratios, sortBy, ratioStyle) => {
	const invert = ratioStyle === RatioStyle.STACKED_BAR_SIDEWAYS;

	return cloneDeep(ratios)
		.sort(
			(a, b) =>
				getIngredientPercentage(b, sortBy) - getIngredientPercentage(a, sortBy)
		)
		.map(r => {
			const sortedRatio = r.ratio
				.sort((a, b) => ascending(a.name, b.name))
				.sort((a, b) => {
					const direction = (invert: boolean) => (invert ? 1 : -1);
					return a.name === sortBy
						? direction(invert)
						: b.name === sortBy
						? direction(!invert)
						: 0;
				});

			return Object.assign(
				{},
				{
					...r,
					ratio: sortedRatio,
				}
			);
		});
};

export const slug = (string: string) => string.split(' ').join('-');
