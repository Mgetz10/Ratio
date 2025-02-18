import { Formula, Ingredient, Ratio } from '../../globals/types';

export interface FormulaComparisonProps {
  formulas: (Formula | Ratio)[];
}
export interface SortButtonsProps {
  sortByState: [
    Ingredient | undefined,
    React.Dispatch<React.SetStateAction<Ingredient | undefined>>,
  ];
  formulaStyleState: [VizStyle, React.Dispatch<React.SetStateAction<VizStyle>>];
  combineFlourState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  simplifyState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  roundLevelState: [number, React.Dispatch<React.SetStateAction<number>>];
}

export enum VizStyle {
  STACKED_BAR = 'stacked-bar',
  STACKED_BAR_SIDEWAYS = 'stacked-bar-sideways',
  PIE = 'pie',
  HALF_PIE = 'half-pie',
}
