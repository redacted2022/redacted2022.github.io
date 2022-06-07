import { Link } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'

function CloseModal(props) {
	return (
		<Modal show={props.state}>
			<Modal.Header>Quit to level selection?</Modal.Header>
			<Modal.Body>Your progress will be lost</Modal.Body>
			<Modal.Footer>
				<Button
					variant='secondary'
					onClick={() => {
						props.stateSetter(false)
					}}>
					Cancel
				</Button>
				<Link to='/play'>
					<Button variant='primary'>Quit</Button>
				</Link>
			</Modal.Footer>
		</Modal>
	)
}

export default CloseModal
