import { useContext } from 'react';
import { Context as OpinionContext } from 'contexts/OpinionContext';
import OpinionRow from 'components/Opinion/OpinionRow';
import AddOpinion from 'components/Opinion/AddOpinion';

function App() {
	const { sortedOpinions } = useContext(OpinionContext);

	return (
		<>
			<table>
				<tbody>
					{sortedOpinions.map((opinion) => {
						return <OpinionRow key={opinion.id} opinion={opinion} />;
					})}
				</tbody>
			</table>
			<AddOpinion />
		</>
	);
}

export default App;
