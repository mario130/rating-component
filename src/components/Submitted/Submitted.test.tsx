import React from 'react';
import { render, screen } from '@testing-library/react';
import Submitted from './Submitted';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const initialState = { rating: 0 };
const mockStore = configureStore();
let store;

it('Back button is present', () => {
	store = mockStore(initialState);
	render(
		<Provider store={store}>
			<MemoryRouter>
				<Submitted />
			</MemoryRouter>
		</Provider>
	);

	expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument();
})