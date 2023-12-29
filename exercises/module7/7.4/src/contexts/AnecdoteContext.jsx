import React, { useState } from 'react';

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
	const [anecdotes, setAnecdotes] = useState([
		{
			content: 'If it hurts, do it more often',
			author: 'Jez Humble',
			info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
			votes: 0,
			id: 1,
		},
		{
			content: 'Premature optimization is the root of all evil',
			author: 'Donald Knuth',
			info: 'http://wiki.c2.com/?PrematureOptimization',
			votes: 0,
			id: 2,
		},
	]);
	const [notification, setNotification] = useState('');
	const [content, setContent] = useState('');
	const [author, setAuthor] = useState('');
	const [info, setInfo] = useState('');

	const addNew = (anecdote) => {
		anecdote.id = Math.round(Math.random() * 10000);
		setAnecdotes(anecdotes.concat(anecdote));
		setAuthor('');
		setContent('');
		setInfo('');
	};

	const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

	const vote = (id) => {
		const anecdote = anecdoteById(id);

		const voted = {
			...anecdote,
			votes: anecdote.votes + 1,
		};

		setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
	};

	const exposedValue = {
		anecdotes,
		setAnecdotes,
		notification,
		setNotification,
		content,
		setContent,
		author,
		setAuthor,
		info,
		setInfo,
		addNew,
		vote,
	};

	return (
		<Context.Provider value={exposedValue}>{props.children}</Context.Provider>
	);
};

export { Context, ProviderWrapper };
