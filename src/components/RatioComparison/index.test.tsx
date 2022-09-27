import { render, screen } from '@testing-library/react';
import RatioComparison from '.';
import { ratios } from '../../data/ratios';

test('should show ratios', () => {
	render(<RatioComparison ratios={ratios} />);
	const recipeText = screen.getByText('bread');
	expect(recipeText).toBeVisible();
});
