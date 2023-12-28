require('dotenv').config();
const DB_URL = process.env.DB_URL;

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(DB_URL);

const phonebookSchema = new mongoose.Schema({
	name: String,
	phone: String,
});

const Phonebook = mongoose.model('Phonebook', phonebookSchema);

switch (process.argv.length) {
	// get all phone numbers
	case 2:
		Phonebook.find({}).then((result) => {
			result.forEach((person) => console.log(`${person.name} ${person.phone}`));
			mongoose.connection.close();
		});
		break;

	// add new phone number
	case 4:
		const phonebook = new Phonebook({
			name: process.argv[2],
			phone: process.argv[3],
		});

		phonebook.save().then((result) => {
			console.log(`Added ${result.name} number ${result.phone} to phonebook`);
			mongoose.connection.close();
		});
		break;

	// wrong number of arguments provided
	default:
		console.log(`${process.argv.length} argc - 2 or 4 expected`);
		process.exit(1);
		break;
}
