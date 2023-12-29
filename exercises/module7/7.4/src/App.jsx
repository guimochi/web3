import { useContext } from 'react';
import { useMatch } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Context as AnecdoteContext } from './contexts/AnecdoteContext';
import Anecdote from './components/Anecdote';
import AnecdoteList from './components/AnecdoteList';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';
import CreateNew from './components/CreateNew';
import Notification from './components/Notification';

const App = () => {
	const { anecdotes, addNew, notification } = useContext(AnecdoteContext);

	const match = useMatch('/anecdotes/:id');
	const anecdote = match
		? anecdotes.find((anecdote) => anecdote.id === Number(match.params.id))
		: null;

	return (
		<div>
			<h1>Software anecdotes</h1>
			<Menu />
			<Notification message={notification}/>
			<Routes>
				<Route path='/create' element={<CreateNew addNew={addNew} />} />
				<Route path='/about' element={<About />} />
				<Route
					path='/anecdotes/:id'
					element={<Anecdote anecdote={anecdote} />}
				/>
				<Route path='/' element={<AnecdoteList anecdotes={anecdotes} />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
