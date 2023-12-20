import { useState } from 'react';
import Display from 'components/Display/Display';
import Button from 'components/Button/Button';

const App = () => {
	const [counter, setCounter] = useState(0);
	console.log('🚀 ~ file: App.jsx:7 ~ App ~ counter:', counter);

	const increaseByOne = () => {
		console.log('increasing, value before', counter);
		setCounter(counter + 1);
	};

	const decreaseByOne = () => {
		console.log('decreasing, value before', counter);
		setCounter(counter - 1);
	};

	const setToZero = () => {
		console.log('resetting to zero, value before', counter);
		setCounter(0);
	};

	return (
		<>
			<Display counter={counter} />
			<Button onClick={increaseByOne} text='plus' />
			<Button onClick={setToZero} text='zero' />
			<Button onClick={decreaseByOne} text='minus' />
		</>
	);
};

export default App;
