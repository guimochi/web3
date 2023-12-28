import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/persons';

const getAll = () => {
	return axios.get(baseUrl).then((response) => response.data);
};

const getByName = (name) => {
	return axios
		.get(`${baseUrl}?name=${name}`)
		.then((response) => {
			return response?.data;
		})
		.catch((error) => {
			return undefined;
		});
};

const create = (newObject) => {
	return axios.post(baseUrl, newObject).then((response) => response.data);
};

const update = (id, newObject) => {
	return axios
		.put(`${baseUrl}/${id}`, newObject)
		.then((response) => response.data)
		.catch((error) => console.log(`resource unavailable\n${error}`));
};

const deleteById = (id) => {
	return axios
		.delete(`${baseUrl}/${id}`)
		.then((response) => response.data)
		.catch((error) => console.error(`ressource unavailabe\n${error}`));
};

export default {
	getAll,
	create,
	update,
	getByName,
	deleteById,
};
