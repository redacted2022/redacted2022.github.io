import { Link } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'

function CloseModal(props) {
	return (
		<Modal show={props.state}>
			<Modal.Header>Odejít zpět do výběru úrovní?</Modal.Header>
			<Modal.Footer>
				<Button
					variant='secondary'
					onClick={() => {
						props.stateSetter(false)
					}}>
					Zrušit
				</Button>
				<Link to='/play'>
					<Button variant='primary'>Odejít</Button>
				</Link>
			</Modal.Footer>
		</Modal>
	)
}

export default CloseModal
