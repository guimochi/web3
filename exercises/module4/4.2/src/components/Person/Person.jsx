import personService from 'services/persons';

const Person = ({ person, setPersons }) => {
	const handleDeleteButton = (id) => () => {
		if (!window.confirm('Do you really want to delete this user ?')) {
			return;
		}
		personService
			.deleteById(id)
			.then(personService.getAll().then((persons) => setPersons(persons)));
	};

	return (
		<p>
			{person.name} {person.number}{' '}
			<button onClick={handleDeleteButton(person.id)}>delete</button>
		</p>
	);
};
export default Person;
