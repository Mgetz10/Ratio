import StackedBar from '../StackedBar';
import { RatioComparisonProps } from './types';
import { StyleRatioComparison } from './styles';
import { Ingredients, Ratio } from '../../globals/types';
import { sortRatiosBy } from '../../globals/helpers';
import { useMemo, useState } from 'react';
import { allIngredients } from '../../globals/constants';
import { cloneDeep } from 'lodash';

type IngredientSort = (sortBy: Ingredients) => void;
const RatioComparison = ({ ratios }: RatioComparisonProps) => {
	const [sortedRatios, setSortedRatios] = useState(cloneDeep(ratios));

	const ingredientSort: IngredientSort = sortBy =>
		setSortedRatios(sortRatiosBy(ratios, sortBy));

	return (
		<StyleRatioComparison>
			<h1>Ratio Comparison</h1>
			<SortButtons ingredientSort={ingredientSort} />
			<div className="ratios">
				{sortedRatios.map(({ name, ratio }) => (
					<div key={name} className="ratio">
						<StackedBar ratio={ratio} />
						<span className="label">{name}</span>
					</div>
				))}
			</div>
		</StyleRatioComparison>
	);
};

export default RatioComparison;

const SortButtons = ({
	ingredientSort
}: {
	ingredientSort: IngredientSort;
}) => {
	return (
		<div className="sort-buttons">
			<span>Sort by:</span>
			{allIngredients.map(ing => (
				<button className={ing} key={ing} onClick={() => ingredientSort(ing)}>
					{ing}
				</button>
			))}
		</div>
	);
};
