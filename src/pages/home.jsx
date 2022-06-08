import { Link } from 'react-router-dom'

function Home() {
	return (
		<div className='bg-container text-light'>
			<div className='container'>
				<div
					className='row d-flex align-items-center'
					style={{ height: 75 + 'vh' }}>
					<div className='col-lg-6'>
						<h1>REDACTED</h1>
						<p className='mt-5'>
							[REDACTED] je multimediální projekt, který si klade
							za hlavní cíl zpracovat a formou interaktivní webové
							stránky se zabudovanou videohrou předat informace o
							fungování cenzury novin a organizací, jež je
							spravovaly. Zároveň bychom chtěli přibížit život
							"obyčejného" člověka, který pracoval právě pro
							takovou společnost. Tyto a další cíle chceme
							zpracovat přehledně, srozumitelně a pokud možno
							esteticky a zábavně.
						</p>
						<Link to='/#/about' className='btn btn-secondary me-3'>
							O projektu
						</Link>
						<Link to='/#/play' className='btn btn-primary'>
							Hrát
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
