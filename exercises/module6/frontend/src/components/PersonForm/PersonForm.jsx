import personService from 'services/persons';

const PersonForm = ({
	persons,
	setPersons,
	newName,
	setNewName,
	newNumber,
	setNewNumber,
}) => {
	const handleNameChange = (e) => {
		setNewName(e.target.value);
	};

	const handleNumberChange = (e) => {
		setNewNumber(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (newName.trim() === '' || newNumber.trim() === '') {
			alert('Name or number cannot be empty');
			return;
		}
		personService
			.getByName(newName)
			.then((result) => {
				if (result) {
					alert('NO NO NO');
					return;
				}
				return personService.create({ name: newName, number: newNumber });
			})
			.then((newPerson) => {
				setPersons(persons.concat(newPerson));
				setNewName('');
				setNewNumber('');
			})
			.catch((error) => {
				console.error(error);
				alert('An error occurred');
			});
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				name: <input onChange={handleNameChange} value={newName} required />
			</div>
			<div>
				number:{' '}
				<input onChange={handleNumberChange} value={newNumber} required />
			</div>
			<div>
				<button type='submit'>add</button>
			</div>
		</form>
	);
};

export default PersonForm;
