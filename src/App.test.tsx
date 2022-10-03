import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Should Have Correct title', () => {
	render(<App />);
	const text = screen.getByText('Formula Comparison');
	expect(text).toBeInTheDocument();
});
