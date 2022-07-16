import React from 'react';
import { render, screen } from '@testing-library/react';
import Submitted from './Submitted';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

it('Back button is present', () => {
	render(
		<MemoryRouter>
			<Submitted />
		</MemoryRouter>
	);

	expect(screen.getByText(/thank you!/i)).toBeInTheDocument();
})