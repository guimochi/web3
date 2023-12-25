import { useContext } from 'react';
import { Context as CountersContext } from 'contexts/CountersContext';

const Reset = () => {
	const { resetCounter } = useContext(CountersContext);

	const handleReset = () => {
		resetCounter();
	};

	return <button onClick={handleReset}>reset scores</button>;
};

export default Reset;
