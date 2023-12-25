import Filter from 'components/Filter/Filter';
import Persons from 'components/Persons/Persons';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import PersonForm from '../PersonForm/PersonForm';
import personService from 'services/persons';

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filter, setFilter] = useState('');

	useEffect(() => {
    const fetchData = async () => {
        const initialPersons = await personService.getAll();
        setPersons(initialPersons);
    };
    fetchData();
}, []);

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
			<Persons persons={persons} filter={filter} setPersons={setPersons} />
		</div>
	);
};

export default App;
