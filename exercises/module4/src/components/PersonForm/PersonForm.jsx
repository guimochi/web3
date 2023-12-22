let id = 5;
const PersonForm = ({
	persons,
	setPersons,
	newName,
	setNewName,
	newNumber,
	setNewNumber,
}) => {
	const handleNameChange = (e) => setNewName(e.target.value);
	const handleNumberChange = (e) => setNewNumber(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (persons.find((person) => person.name === newName)) {
			alert('NO NO NO');
			return;
		}
		setPersons(persons.concat({ id: id, name: newName, number: newNumber }));
		setNewName('');
		setNewNumber('');
		id++;
	};
	return (
		<form onSubmit={handleSubmit}>
			<div>
				name: <input onChange={handleNameChange} value={newName} />
			</div>
			<div>
				number: <input onChange={handleNumberChange} value={newNumber} />
			</div>
			<div>
				<button type='submit'>add</button>
			</div>
		</form>
	);
};

export default PersonForm;
