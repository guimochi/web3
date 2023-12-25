import { useContext } from 'react';
import { Context as CountersContext } from 'contexts/CountersContext';

const Satisfaction = ({ satisfaction }) => {
	// Dynamically access the context values and setter functions based on satisfaction
	const contextValues = useContext(CountersContext);
	const {
		[`${satisfaction.toLowerCase()}Counter`]: value,
		[`increase${satisfaction}Counter`]: inc,
	} = contextValues;

	return (
		<li>
			{satisfaction} : {value}{' '}
			<button onClick={() => inc(value + 1)}>
				{satisfaction.toLowerCase()}++
			</button>
		</li>
	);
};

export default Satisfaction;
