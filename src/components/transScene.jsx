function TransScene(props) {
	return (
		<div className='position-absolute top-0 start-0 w-100 h-100 bg-dark'>
			<div className='overlay-black' />
			<img src={props.imageUrl} alt='' className='image-cover' />
			<div className='transition-text-container'>
				<p className='text-center my-auto ms-3'>
					{props.transitionText}
				</p>
				<button
					className='btn btn-primary my-3 me-3'
					onClick={(event) => {
						props.stateSetter(1)
					}}>
					pokračovat
				</button>
			</div>
		</div>
	)
}

export default TransScene
