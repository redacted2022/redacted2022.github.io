import { useState, useEffect } from 'react'
import LevelList from '../components/levelList'

function Levels() {
	let [gameData, setGameData] = useState([])

	useEffect(() => {
		fetch('/gameData.json')
			.then((response) => {
				return response.json()
			})
			.then((json) => {
				setGameData(json)
			})
	}, [])

	return (
		<div className='bg-container'>
			<h1 className='text-center text-light py-5' >Výběr úrovně</h1>
			<LevelList levels={gameData} />
		</div>
	)
}

export default Levels
