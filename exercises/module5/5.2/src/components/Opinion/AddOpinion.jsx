import { useContext } from 'react';
import { Context as OpinionContext } from 'contexts/OpinionContext';

const AddOpinion = () => {
	const { newOpinion, setNewOpinion, addOpinion } = useContext(OpinionContext);

	const handleChange = (e) => {
		setNewOpinion(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addOpinion(newOpinion);
		setNewOpinion('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input onChange={handleChange} value={newOpinion}></input>
			<button type='submit'>Add Opinion</button>
		</form>
	);
};

export default AddOpinion;
