import { render, screen } from '@testing-library/react';
import FormulaComparison from '.';
import { ratios } from '../../data/ratios';

test('should show ratios', () => {
	render(<FormulaComparison formulas={ratios} />);
	const recipeText = screen.getByText('bread');
	expect(recipeText).toBeVisible();
});
