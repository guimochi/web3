import { useState } from 'react';
import Title from 'components/Title/Title';
import Button from 'components/Button/Button';
import Statistic from 'components/Statistic/Statistic';

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleClick = (value, setValue) => {
		const n = parseInt(value) + 1;
		setValue(n);
	};

	return (
		<div>
			<Title text='give feedback' />
			<Button handleFunction={() => handleClick(good, setGood)} text='good' />
			<Button
				handleFunction={() => handleClick(neutral, setNeutral)}
				text='neutral'
			/>
			<Button handleFunction={() => handleClick(bad, setBad)} text='bad' />
			<Title text='statistics' />
			<Statistic text='good' value={good} />
			<Statistic text='neutral' value={neutral} />
			<Statistic text='bad' value={bad} />
		</div>
	);
};

export default App;
