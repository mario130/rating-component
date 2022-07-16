import React from 'react';
import { render, screen } from '@testing-library/react';
import Rating from './Rating';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

it('Rating buttons are present', () => {
	render(
		<MemoryRouter>
			<Rating />
		</MemoryRouter>
	);

	let buttons = screen.getAllByRole('button').filter(el => el.textContent != 'Submit');
	expect(buttons).toHaveLength(5)
})

it('Rating buttons are working', () => {
	render(
		<MemoryRouter>
			<Rating />
		</MemoryRouter>
	);

	userEvent.click(screen.getByText('3'));
	expect(screen.getByText('3')).toHaveClass('bg-primary text-white');
	expect(screen.getByText('5')).toHaveClass('bg-gray-700 hover:bg-gray-500 text-gray-300');
})

it('Initial rating is working', () => {
	render(
		<MemoryRouter>
			<Rating rating={4} />
		</MemoryRouter>
	);

	expect(screen.getByText('4')).toHaveClass('bg-primary text-white');
})

it('Submit button is enabled on rating change', () => {
	render(
		<MemoryRouter>
			<Rating />
		</MemoryRouter>
	);

	expect(screen.getByRole('button', { name: /submit/i })).toBeDisabled();
	userEvent.click(screen.getByText('4'));
	expect(screen.getByRole('button', { name: /submit/i })).not.toBeDisabled();

	// userEvent.click(screen.getByRole('button', { name: /submit/i }));
})
