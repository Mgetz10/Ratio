import { Formula, Ingredient } from '../../globals/types';

export interface FormulaComparisonProps {
	formulas: Formula[];
}
export interface SortButtonsProps {
	sortByState: [
		Ingredient | undefined,
		React.Dispatch<React.SetStateAction<Ingredient | undefined>>
	];
	formulaStyleState: [VizStyle, React.Dispatch<React.SetStateAction<VizStyle>>];
}

export enum VizStyle {
	STACKED_BAR = 'stacked-bar',
	STACKED_BAR_SIDEWAYS = 'stacked-bar-sideways',
	PIE = 'pie',
}
