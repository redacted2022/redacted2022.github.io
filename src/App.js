import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import Levels from './pages/levels'
import GameUI from './pages/gameUI'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/'>
						<Route exact path='' element={<Home />} />
						<Route exact path='about' element={<About />} />
						<Route exact path='play' element={<Levels />} />
						<Route exact path='play/:id' element={<GameUI />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
