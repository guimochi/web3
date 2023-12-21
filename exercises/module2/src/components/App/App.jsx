import { useState } from 'react';
import Display from 'components/Display/Display';
import Button from 'components/Button/Button';

const App = () => {
	const [counter, setCounter] = useState(
		JSON.parse(localStorage.getItem('counter'))
	);

	const changeCount = (delta) => {
		setCounter(counter + parseInt(delta));
		localStorage.setItem('counter', JSON.stringify(counter));
	};

	return (
		<>
			<Display counter={counter} />
			<Button changeCount={changeCount} delta={1} text='plus' />
			<Button delta={-counter} changeCount={changeCount} text='reset' />
			<Button delta={-1} changeCount={changeCount} text='minus' />
		</>
	);
};

export default App;
