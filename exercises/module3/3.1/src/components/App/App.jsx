import { useState } from 'react';
import Title from 'components/Title/Title';
import Button from 'components/Button/Button';
import Statistic from 'components/Statistic/Statistic';

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const total = parseInt(good) + parseInt(neutral) + parseInt(bad);

	const handleClick = (value, setValue) => {
		const n = parseInt(value) + 1;
		setValue(n);
	};

	const average = () => {
		return (parseInt(good) - parseInt(bad)) / total || 0;
	};

	const positive = () => {
		return ((parseInt(good) / total) * 100 || 0) + '%';
	};

	const feedback = () => {
		if (total === 0) {
			return <div>No feedback given</div>;
		}
		return (
			<>
				<table>
					<Statistic text='good' value={good} />
					<Statistic text='neutral' value={neutral} />
					<Statistic text='bad' value={bad} />
					<Statistic text='average' value={average()} />
					<Statistic text='average' value={positive()} />
				</table>
			</>
		);
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
			{feedback()}
		</div>
	);
};

export default App;
