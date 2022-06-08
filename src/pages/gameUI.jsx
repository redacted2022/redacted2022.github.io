import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import TransScene from '../components/transScene'
import CloseModal from '../components/closeModal'
import PaperRedacting from '../components/paperRedacting'
import PaperReview from '../components/paperReview'

function GameUI(props) {
	const params = useParams()

	let [gameData, setGameData] = useState([])

	let [censoredParts, setCensoredParts] = useState([])

	let [gameState, setGameState] = useState(0)

	let [closeModalState, setCloseModalState] = useState(false)

	const re = /<\?[^\?>]+\?>(0|1)/g

	useEffect(() => {
		fetch('/gameData.json')
			.then((response) => {
				return response.json()
			})
			.then((json) => {
				let tempGameData = json

				let tempCensoredParts = tempGameData[params.id].pages.map(
					(page, index) => {
						return []
					}
				)

				tempGameData.forEach((level, levelIndex) => {
					level.pages.map((page, pageIndex) => {
						let parts = []
						let lastIndex = 0
						Array.from(page.text.matchAll(re)).forEach(
							(match, matchIndex) => {
								if (levelIndex === parseInt(params.id)) {
									tempCensoredParts[pageIndex].push(
										!Boolean(
											parseInt(
												match[0].slice(
													match[0].length - 1
												)
											)
										)
									)
								}
								parts.push(
									page.text.slice(lastIndex, match.index)
								)
								parts.push(
									page.text.slice(
										match.index,
										match.index + match[0].length
									)
								)
								lastIndex = match.index + match[0].length
							}
						)
						parts.push(page.text.slice(lastIndex, page.text.length))
						page.text = parts
						setCensoredParts(tempCensoredParts)
						return true
					})
				})

				setGameData(tempGameData)
			})
	}, [])

	if (gameData.length > 0) {
		return (
			<div className='position-absolute top-0 start-0 w-100 h-100 bg-dark text-light'>
				{gameState === 0 ? (
					<TransScene
						imageUrl={gameData[params.id].imageUrl}
						transitionText={gameData[params.id].transitionText}
						stateSetter={setGameState}
					/>
				) : null}
				<CloseModal
					state={closeModalState}
					stateSetter={setCloseModalState}
				/>
				<button
					className='btn-close btn-close-white m-2'
					onClick={() => {
						setCloseModalState(true)
					}}
				/>
				{gameState === 1 ? (
					<PaperRedacting
						pages={gameData[params.id].pages}
						stateSetter={setGameState}
						censoredParts={censoredParts}
						censoredPartsSetter={setCensoredParts}
					/>
				) : null}
				{gameState === 2 ? (
					<PaperReview
						pages={gameData[params.id].pages}
						censoredParts={censoredParts}
					/>
				) : null}
			</div>
		)
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

export default GameUI
