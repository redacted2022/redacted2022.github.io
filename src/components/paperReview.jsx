import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'

function PaperReview(props) {
	const re = /<\?[^\?>]+\?>(0|1)/g

	return (
		<Carousel
			indicators={false}
			interval={null}
			wrap={false}
			className='w-75 mx-auto'>
			{props.pages.map((page, index) => {
				let i = 0
				return (
					<Carousel.Item key={index}>
						<div className='d-flex justify-content-center align-items-center mx-auto w-75'>
							<div className='review-paper text-dark'>
								<div className='p-1'>
									{page.text.map((part, partIndex) => {
										if (re.test(part)) {
											return (
												<span
													key={partIndex}
													className={
														props.censoredParts[
															index
														][i++]
															? 'correct'
															: 'wrong'
													}>
													{part.slice(2, -3)}
												</span>
											)
										} else {
											return part
										}
									})}
								</div>
							</div>
							<div className='separator mx-1' />
							<div className='review-explanation'>
								<div className='p-1'>{page.explanation}</div>
							</div>
						</div>
					</Carousel.Item>
				)
			})}
			<Carousel.Item>
				<div className='review-btn-container mx-auto'>
					<Link to='/play' className='btn btn-primary btn-lg mx-auto'>
						zpět
					</Link>
				</div>
			</Carousel.Item>
		</Carousel>
	)
}

export default PaperReview
