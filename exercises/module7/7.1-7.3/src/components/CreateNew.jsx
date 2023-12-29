import { useContext } from 'react';
import { Context } from '../contexts/AnecdoteContext';
import { useNavigate } from 'react-router-dom'; // import useHistory

const CreateNew = () => {
	const { content, setContent, author, setAuthor, info, setInfo, addNew, setNotification} =
		useContext(Context);
	const navigate = useNavigate('');

	const handleSubmit = (e) => {
		e.preventDefault();
		addNew({
			content,
			author,
			info,
			votes: 0,
		});
		setNotification(`a new anecdote ${content} created!`);
		navigate('/');
	};

	return (
		<div>
			<h2>create a new anecdote</h2>
			<form onSubmit={handleSubmit}>
				<div>
					content
					<input
						name='content'
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
				</div>
				<div>
					author
					<input
						name='author'
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
					/>
				</div>
				<div>
					url for more info
					<input
						name='info'
						value={info}
						onChange={(e) => setInfo(e.target.value)}
					/>
				</div>
				<button>create</button>
			</form>
		</div>
	);
};

export default CreateNew;
