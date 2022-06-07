import { Link } from 'react-router-dom'

function levelList(props) {
	return (
		<div className='container'>
			<div className='row'>
				{props.levels.map((level, index) => {
					return (
						<div key={index} className='col-3'>
							<div className='card mt-4'>
								<div className='card-body'>
									<h5 className='card-title'>
										{level.title}
									</h5>
									<p className='card-text'>
										{level.description}
									</p>
									<Link
										to={`/play/${index}`}
										className='btn btn-primary'>
										Hrát
									</Link>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default levelList
