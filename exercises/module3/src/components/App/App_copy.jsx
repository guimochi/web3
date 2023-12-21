import { useState } from 'react';

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.',
	];

	// const anecdote_votes = anecdotes.map((anecdote) => ({
	// 	anecdote: anecdote,
	// 	votes: 0,
	// }));

	const initial_votes = new Array(anecdotes.length).fill(0);

	const [selected, setSelected] = useState(getRandomInt(anecdotes.length));

	const [votes, setVotes] = useState(initial_votes);

	const handleClick = () => {
		setSelected(getRandomInt(anecdotes.length));
	};

	const handleVote = () => {
		const copy = [...votes];
		copy[selected] += 1;
		setVotes(copy);
	};

	const getMostVoted = () => {
		const maxVotes = Math.max(...votes);
		return votes.indexOf(maxVotes);
	};

	return (
		<div>
			<h1>Anecdote of the day</h1>
			<p>{anecdotes[selected]}</p>
			<p>has {votes[selected]} votes</p>
			<button onClick={handleVote}>vote</button>
			<button onClick={handleClick}>next anecdote</button>
			<h1>Anecdote with the most votes</h1>
			<p>{anecdotes[getMostVoted()]}</p>
			<p>has {votes[getMostVoted()]} votes</p>
		</div>
	);
};

export default App;
