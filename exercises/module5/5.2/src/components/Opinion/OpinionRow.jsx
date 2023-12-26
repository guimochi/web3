import { Context as OpinionContext } from 'contexts/OpinionContext';
import { useContext } from 'react';

const OpinionRow = ({ opinion }) => {
	const { addVoteById } = useContext(OpinionContext);

	const handleClickVote = () => {
		addVoteById(opinion.id);
	};

	return (
		<tr>
			<td>Opinion </td>
			<td>{opinion.opinion}</td>
			<td>: {opinion.votes} </td>
			<td>
				<button onClick={handleClickVote}>Vote</button>
			</td>
		</tr>
	);
};

export default OpinionRow;
