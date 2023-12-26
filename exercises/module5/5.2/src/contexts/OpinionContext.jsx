import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Context = React.createContext(null);

const ProviderWrapper = ({ children }) => {
	const [opinions, setOpinions] = useState([
		{ id: uuid(), opinion: 'A', votes: 3 },
		{ id: uuid(), opinion: 'B', votes: 8 },
		{ id: uuid(), opinion: 'C', votes: 1 },
	]);
	const [newOpinion, setNewOpinion] = useState('');

	const sortedOpinions = opinions.sort((a, b) => b.votes - a.votes);

	const addOpinion = (opinion) => {
		const newOpinion = { id: uuid(), opinion, votes: 1 };
		setOpinions(opinions.concat(newOpinion));
	};
	const addVoteById = (id) => {
		setOpinions(
			opinions.map((e) => (e.id === id ? { ...e, votes: e.votes + 1 } : e))
		);
	};

	const exposedValue = {
		sortedOpinions,
		addOpinion,
		addVoteById,
		newOpinion,
		setNewOpinion,
	};

	return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
};

export { Context, ProviderWrapper };
