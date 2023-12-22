import Filter from 'components/Filter/Filter';
import Persons from 'components/Persons/Persons';
import { useState } from 'react';
import Header from '../Header/Header';
import PersonForm from '../PersonForm/PersonForm';

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
	]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filter, setFilter] = useState('');

	return (
		<div>
			<Header text='Phonebook' />
			<Filter filter={filter} setFilter={setFilter} />
			<Header text='add new' />
			<PersonForm
				persons={persons}
				setPersons={setPersons}
				newName={newName}
				setNewName={setNewName}
				newNumber={newNumber}
				setNewNumber={setNewNumber}
			/>
			<Header text={'Numbers'} />
			<Persons persons={persons} filter={filter} />
		</div>
	);
};

export default App;
