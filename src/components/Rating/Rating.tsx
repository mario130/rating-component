import React, { Component } from 'react'

type RatingProps = {
	rating?: number
}

export default class Rating extends Component<RatingProps> {
	state: Readonly<RatingProps> = {
		rating: this.props.rating || 0
	}

	onRatingChange = (e: React.MouseEvent<HTMLButtonElement>) => this.setState({ rating: +e.currentTarget.value })

	render() {
		return (
			<div className='m-auto bg-secondary rounded-2xl p-6 max-w-sm text-white'>
				<div className='bg-gray-700 rounded-3xl w-fit p-4'>
					<img
						width="16"
						src="/images/icon-star.svg"
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
								onClick={this.onRatingChange}
								value={el}
								className={`${this.state.rating == el ? 'bg-primary text-white' : 'bg-gray-700 hover:bg-gray-500 text-gray-300'}  active:bg-primary active:text-white transition-all rounded-full  w-12 h-12 p-2 space-x-2`}
							>{el}
							</button>
						)
					}
				</div>
				{/* submit button */}
				<button
					className='bg-primary hover:bg-white hover:text-primary transition-all rounded-full w-full font-semibold tracking-widest  p-3 my-2'
				>Submit</button>
			</div>
		)
	}
}
