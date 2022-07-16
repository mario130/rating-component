import React from 'react';
import { render, screen } from '@testing-library/react';
import Rating from './Rating';
import userEvent from '@testing-library/user-event';

it('Rating buttons are present', () => {
	render(<Rating />);

	let buttons = screen.getAllByRole('button').filter(el => el.textContent != 'Submit');
	expect(buttons).toHaveLength(5)
})

it('Rating buttons are working', () => {
	render(<Rating />);

	userEvent.click(screen.getByText('3'));
	expect(screen.getByText('3')).toHaveClass('bg-primary text-white');
	expect(screen.getByText('5')).toHaveClass('bg-gray-700 hover:bg-gray-500 text-gray-300');
})

it('Initial rating is working', () => {
	render(<Rating rating={4} />);

	expect(screen.getByText('4')).toHaveClass('bg-primary text-white');
})

it('Submit button is working', () => {
	render(<Rating />);

	userEvent.click(screen.getByText('4'));
	userEvent.click(screen.getByRole('button', { name: /submit/i }));
	expect(screen.getByText(/thank you!/i)).toBeInTheDocument();
})
