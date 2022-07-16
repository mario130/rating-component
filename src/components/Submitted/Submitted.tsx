import { useSelector } from 'react-redux';
import { Link, Navigate } from "react-router-dom";
import { RootState } from '../../app/store';

export default function Submitted() {
	const rating = useSelector((state: RootState) => state.rating.rating);

	return (
		rating === 0 ?
			<Navigate to={'/'} />
			:
			<div className='m-auto bg-secondary rounded-2xl p-6 max-w-sm text-white flex items-center flex-col'>
				<img
					className='mt-2'
					width="140"
					src="/images/illustration-thank-you.svg"
					alt="star icon"
				/>

				<div className='mt-6 mb-4 px-4 py-2 bg-gray-700 rounded-full text-orange-400 text-sm'>
					You selected {rating} out of 5
				</div>

				<h1 className='text-2xl font-semibold my-4'>Thank you!</h1>
				<p className='text-true-gray-400 text-center'>
					We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
				</p>
				{/* submit button */}
				<Link to={'/'} className='w-full'>
					<button
						className={` bg-primary hover:bg-white hover:text-primary transition-all rounded-full w-full font-semibold tracking-widest  p-3 my-2 mt-8`}
					>
						Go back
					</button>
				</Link>
			</div>
	)
}
