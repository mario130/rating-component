import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { setRating } from "../../app/ratingSlice";
import { RootState } from '../../app/store';

export type RatingProps = {
	rating?: number
}

export default function Rating() {
	const dispatch = useDispatch();

	const rating = useSelector((state: RootState) => state.rating.rating);
	function onChangeRating(incrementAmountValue: number) {
		dispatch(setRating(+incrementAmountValue));
	}

	return (
		<div className='m-auto bg-secondary rounded-2xl p-6 max-w-sm text-white'>
			<div className='bg-gray-700 rounded-3xl w-fit p-4'>
				<img
					width="16"
					src="/rating-component/images/icon-star.svg"
					alt="star icon"
				/>
			</div>
			<h1 className='text-2xl font-semibold my-4'>How did we do?</h1>
			<p className='text-true-gray-400'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
			{/* rating buttons */}
			<div className='flex justify-between py-6'>
				{
					Array.from({ length: 5 }, (_, i) => i + 1).map(el =>
						<button
							key={el}
							onClick={() => onChangeRating(el)}
							value={el}
							className={`${rating == el ? 'bg-primary text-white' : 'bg-gray-700 hover:bg-gray-500 text-gray-300'}  active:bg-primary active:text-white transition-all rounded-full  w-12 h-12 p-2 space-x-2`}
						>{el}
						</button>
					)
				}
			</div>
			{/* submit button */}
			<Link to={'/rating-component/submitted'}>
				<button
					disabled={rating == 0}
					className={`${rating === 0 ? "bg-gray-800 text-gray-600" : "bg-primary hover:bg-white hover:text-primary"}   transition-all rounded-full w-full font-semibold tracking-widest  p-3 my-2`}
				>
					Submit
				</button>
			</Link>
		</div>
	)
}
