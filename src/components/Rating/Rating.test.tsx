import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Rating from './Rating';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Ratings', () => {
	const initialState = { rating: 0 };
	const mockStore = configureStore();
	let store;

	it('Rating buttons are present', () => {
		store = mockStore(initialState);
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Rating />
				</MemoryRouter>
			</Provider>
		);

		let buttons = screen.getAllByRole('button').filter(el => el.textContent != 'Submit');
		expect(buttons).toHaveLength(5)
	});

	it('Rating buttons are working', () => {
		store = mockStore(initialState);
		const { getByText } = render(
			<Provider store={store}>
				<MemoryRouter>
					<Rating />
				</MemoryRouter>
			</Provider>
		);

		userEvent.click(getByText('3'));

		expect(store.getActions()).toEqual([{ type: 'counter/setRating', payload: 3 }]);

		setTimeout(() => { // work around for async issue
			expect(getByText('3')).toHaveClass('bg-primary text-white');
		}, 500);
		expect(getByText('5')).toHaveClass('bg-gray-700 hover:bg-gray-500 text-gray-300');
	})

	it('Submit button is enabled on rating change', () => {
		store = mockStore(initialState);
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Rating />
				</MemoryRouter>
			</Provider>
		);

		expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
		userEvent.click(screen.getByText('4'));
		setTimeout(() => {
			expect(screen.getByRole('button', { name: /submit/i })).not.toBeDisabled();
		}, 500);
	})
})


