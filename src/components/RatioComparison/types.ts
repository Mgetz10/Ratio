import { Ingredients, Ratio } from '../../globals/types';

export interface RatioComparisonProps {
	ratios: Ratio[];
}
export interface SortButtonsProps {
	sortByState: [
		Ingredients | undefined,
		React.Dispatch<React.SetStateAction<Ingredients | undefined>>
	];
	ratioStyleState: [
		RatioStyle,
		React.Dispatch<React.SetStateAction<RatioStyle>>
	];
}

export enum RatioStyle {
	STACKED_BAR = 'stacked-bar',
	STACKED_BAR_SIDEWAYS = 'stacked-bar-sideways',
	PIE = 'pie',
}
