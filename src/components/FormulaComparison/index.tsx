import StackedBar from '../StackedBar';
import { FormulaComparisonProps, VizStyle, SortButtonsProps } from './types';
import { StyleFormulaComparison } from './styles';
import { Ingredient, FormulaIngredient } from '../../globals/types';
import { sortFormulasBy, slug } from '../../globals/helpers';
import { useState } from 'react';
import { allIngredients } from '../../globals/constants';
import CN from 'classnames';
import stackIcon from '../../fonts/icons/full_stacked_bar_chart_FILL0_wght400_GRAD0_opsz48.svg';
import pieIcon from '../../fonts/icons/pie_chart_FILL0_wght400_GRAD0_opsz48.svg';
import PieChart from '../PieChart/index';

const FormulaComparison = ({ formulas }: FormulaComparisonProps) => {
	const [sortBy, setSortBy] = useState<Ingredient>();
	const [formulaStyle, setFormulaStyle] = useState(VizStyle.PIE);

	const sortedFormulas = sortBy
		? sortFormulasBy(formulas, sortBy, formulaStyle)
		: formulas;

	const getFormulaStyleComponent = (
		style: VizStyle,
		formula: FormulaIngredient[]
	) => {
		switch (style) {
			case VizStyle.STACKED_BAR:
				return <StackedBar formula={formula} />;
			case VizStyle.STACKED_BAR_SIDEWAYS:
				return <StackedBar formula={formula} sideways />;
			case VizStyle.PIE:
				return <PieChart formula={formula} />;
			default:
				return '';
		}
	};
	return (
		<StyleFormulaComparison>
			<h1>Formula Comparison</h1>
			<SortButtons
				sortByState={[sortBy, setSortBy]}
				formulaStyleState={[formulaStyle, setFormulaStyle]}
			/>
			<div className={CN('formulas', formulaStyle)}>
				{sortedFormulas.map(({ name, formula }) => (
					<div key={name} className="formula">
						{getFormulaStyleComponent(formulaStyle, formula)}
						<span className="label">{name}</span>
					</div>
				))}
			</div>
		</StyleFormulaComparison>
	);
};

export default FormulaComparison;

const SortButtons = ({ sortByState, formulaStyleState }: SortButtonsProps) => {
	const [sortBy, setSortBy] = sortByState;
	const [formulaStyle, setFormulaStyle] = formulaStyleState;
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
			{Object.values(VizStyle).map(style => (
				<button
					className={CN('icon', {
						selected: formulaStyle === style,
						sideways: style === VizStyle.STACKED_BAR_SIDEWAYS,
					})}
					key={style}
					onClick={() => setFormulaStyle(style as VizStyle)}
				>
					<img src={style !== VizStyle.PIE ? stackIcon : pieIcon} alt="" />
				</button>
			))}
		</div>
	);
};
