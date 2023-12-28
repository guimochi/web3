import Person from 'components/Person/Person';

const Persons = ({ persons, filter, setPersons }) => {
	return persons
		.filter((person) => {
			return (
				!filter || person.name.toLowerCase().includes(filter.toLowerCase())
			);
		})
		.map((person) => {
			return <Person key={person.id} person={person} setPersons={setPersons} />;
		});
};

export default Persons;
