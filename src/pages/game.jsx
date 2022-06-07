import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import LevelList from '../components/levelList'
import GameUI from '../components/levelList'

function Game() {
	const params = useParams()

	let [gameData, setGameData] = useState([])

	let [closeModalState, setCloseModalState] = useState(false)

	let [gamePhase, setGamePhase] = useState(0)

	let [censoredParts, setCensoredParts] = useState()

	useEffect(() => {
		fetch('/gameData.json')
			.then((response) => {
				return response.json()
			})
			.then((json) => {
				setGameData(json)
			})
	}, [])

	if (gameData.length > 0) {
		return (
			// <BrowserRouter>
			// 	<Routes>
			// 		<Route path='/play'>
			// 			<Route path='/' element={LevelList} />
			// 			<Route path='/:id' element={GameUI} />
			// 		</Route>
			// 	</Routes>
			// </BrowserRouter>
		)
		// switch (gamePhase) {
		// 	case 0:
		// 		return (
		// 			<div className='position-absolute top-0 start-0 w-100 h-100 bg-dark text-light'>
		// 				<CloseModal
		// 					state={closeModalState}
		// 					stateSetter={setCloseModalState}
		// 				/>
		// 				<button
		// 					type='button'
		// 					className='btn-close btn-close-white m-2'
		// 					aria-label='Close'
		// 					onClick={() => {
		// 						setCloseModalState(true)
		// 					}}
		// 				/>

		// 				<PaperRedacting
		// 					pages={gameData[params.id].pages}
		// 					gamePhaseSetter={setGamePhase}
		// 				/>
		// 			</div>
		// 		)
		// 	case 1:
		// 		return (
		// 			<div className='position-absolute top-0 start-0 w-100 h-100 bg-dark text-light'>
		// 				<CloseModal
		// 					state={closeModalState}
		// 					stateSetter={setCloseModalState}
		// 				/>
		// 				<button
		// 					type='button'
		// 					className='btn-close btn-close-white m-2'
		// 					aria-label='Close'
		// 					onClick={() => {
		// 						setCloseModalState(true)
		// 					}}
		// 				/>

		// 				<PaperReview pages={gameData[params.id].pages} />
		// 			</div>
		// 		)
		// 	default:
		// 		return <h1>Something is broken :^(</h1>
		// }
	} else {
		return (
			<div className='position-absolute top-0 start-0 w-100 h-100 bg-dark'>
				<Spinner
					className='position-absolute top-50 start-50'
					animation='border'
					variant='light'
				/>
			</div>
		)
	}
}

export default Game
