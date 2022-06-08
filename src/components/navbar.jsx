import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='container'>
				<Link className='navbar-brand' to='/'>
					[REDACTED]
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<div className='navbar-nav ms-auto'>
						<Link to='/#/' className='nav-link me-lg-5'>
							Domů
						</Link>
						<Link to='/#/about' className='nav-link me-lg-5'>
							O projektu
						</Link>
						<Link to='/#/play' className='nav-link me-lg-5'>
							Hrát
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
