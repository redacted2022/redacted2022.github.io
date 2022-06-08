import { Carousel } from 'react-bootstrap'

function Component(props) {
	const re = /<\?[^\?>]+\?>(0|1)/g

	function handleBtnClick(event, pageIndex) {
		event.target.classList.toggle('redacted')
		let element = event.target
		let index = Array.from(event.target.parentElement.children).indexOf(
			element
		)
		let tempCensoredParts = [...props.censoredParts]
		tempCensoredParts[pageIndex][index] =
			!tempCensoredParts[pageIndex][index]
		props.censoredPartsSetter(tempCensoredParts)
	}

	return (
		<Carousel
			indicators={false}
			interval={null}
			wrap={false}
			className='w-75 mx-auto'>
			{props.pages.map((page, index) => {
				return (
					<Carousel.Item key={index}>
						<div className='paper mx-auto text-dark'>
							<div className='p-1'>
								{page.text.map((part, partIndex) => {
									if (re.test(part)) {
										return (
											<button
												key={partIndex}
												className='btn-redact'
												onClick={(event) => {
													handleBtnClick(event, index)
												}}>
												{part.slice(2, -3)}
											</button>
										)
									} else {
										return part
									}
								})}
							</div>
						</div>
					</Carousel.Item>
				)
			})}
			<Carousel.Item>
				<div className='review-btn-container mx-auto'>
					<button
						className='btn btn-primary btn-lg mx-auto'
						onClick={() => {
							props.stateSetter(2)
						}}>
						Vyhodnotit
					</button>
				</div>
			</Carousel.Item>
		</Carousel>
	)
}

export default Component
