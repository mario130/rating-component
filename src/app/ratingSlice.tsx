import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface RatingState {
	rating: number
}

const initialState: RatingState = {
	rating: 0,
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setRating: (state, action: PayloadAction<number>) => {
			state.rating = action.payload
		},
	},
})

export const { setRating } = counterSlice.actions

export default counterSlice.reducer