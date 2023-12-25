import Person from 'components/Person/Person';

const Persons = ({ persons, filter }) =>
	persons
		.filter((person) => {
			return (
				!filter || person.name.toLowerCase().includes(filter.toLowerCase())
			);
		})
		.map((person) => <Person key={person.id} person={person} />);

export default Persons;
