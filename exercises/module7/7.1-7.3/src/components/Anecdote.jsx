const Anecdote = ({ anecdote }) => {
	return (
		<div>
			<p>Content: {anecdote.content}</p>
			<p>Author: {anecdote.author}</p>
			<p>Info: {anecdote.info}</p>
			<p>Votes: {anecdote.votes}</p>
		</div>
	);
};

export default Anecdote;
