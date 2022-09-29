import StackedBar from '../StackedBar';
import { RatioComparisonProps, RatioStyle, SortButtonsProps } from './types';
import { StyleRatioComparison } from './styles';
import { Ingredient, Ingredients, Ratio } from '../../globals/types';
import { sortRatiosBy, slug } from '../../globals/helpers';
import { useMemo, useState } from 'react';
import { allIngredients } from '../../globals/constants';
import { cloneDeep, sortBy } from 'lodash';
import CN from 'classnames';
import stackIcon from '../../fonts/icons/full_stacked_bar_chart_FILL0_wght400_GRAD0_opsz48.svg';
import pieIcon from '../../fonts/icons/pie_chart_FILL0_wght400_GRAD0_opsz48.svg';
import PieChart from '../PieChart/index';

const RatioComparison = ({ ratios }: RatioComparisonProps) => {
	const [sortBy, setSortBy] = useState<Ingredients>();
	const [ratioStyle, setRatioStyle] = useState(RatioStyle.PIE);

	const sortedRatios = sortBy
		? sortRatiosBy(ratios, sortBy, ratioStyle)
		: ratios;

	const getRatioStyleComponent = (style: RatioStyle, ratio: Ingredient[]) => {
		switch (style) {
			case RatioStyle.STACKED_BAR:
				return <StackedBar ratio={ratio} />;
			case RatioStyle.STACKED_BAR_SIDEWAYS:
				return <StackedBar ratio={ratio} sideways />;
			case RatioStyle.PIE:
				return <PieChart ratio={ratio} />;
			default:
				return '';
		}
	};
	return (
		<StyleRatioComparison>
			<h1>Ratio Comparison</h1>
			<SortButtons
				sortByState={[sortBy, setSortBy]}
				ratioStyleState={[ratioStyle, setRatioStyle]}
			/>
			<div className={CN('ratios', ratioStyle)}>
				{sortedRatios.map(({ name, ratio }) => (
					<div key={name} className="ratio">
						{getRatioStyleComponent(ratioStyle, ratio)}
						<span className="label">{name}</span>
					</div>
				))}
			</div>
		</StyleRatioComparison>
	);
};

export default RatioComparison;

const SortButtons = ({ sortByState, ratioStyleState }: SortButtonsProps) => {
	const [sortBy, setSortBy] = sortByState;
	const [ratioStyle, setRatioStyle] = ratioStyleState;
	return (
		<div className="sort-buttons">
			<span>Sort by:</span>
			{allIngredients.map(ing => (
				<button
					className={CN(slug(ing), { selected: ing === sortBy })}
					key={ing}
					onClick={() => setSortBy(ing)}
				>
					{ing}
				</button>
			))}
			{Object.values(RatioStyle).map(style => (
				<button
					className={CN('icon', {
						selected: ratioStyle === style,
						sideways: style === RatioStyle.STACKED_BAR_SIDEWAYS,
					})}
					key={style}
					onClick={() => setRatioStyle(style as RatioStyle)}
				>
					<img src={style !== RatioStyle.PIE ? stackIcon : pieIcon} alt="" />
				</button>
			))}
		</div>
	);
};
