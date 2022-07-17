import { ratingSlice, RatingState, setRating } from "./ratingSlice";

describe('counter reducer', () => {
	const initialState: RatingState = {
		rating: 0
	};
	it('should handle initial state', () => {
		expect(ratingSlice.reducer(undefined, { type: 'unknown' })).toEqual({
			rating: 0
		});
	});

	it('should handle rating change', () => {
		const actual = ratingSlice.reducer(initialState, setRating(4));
		expect(actual.rating).toEqual(4);
	});
});