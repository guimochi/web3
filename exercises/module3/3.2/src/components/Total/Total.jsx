const Total = ({ parts }) => {
	const total = parts.reduce((a, b) => {
		return parseInt(a) + parseInt(b.exercises);
	}, 0);
	return <p>total of {total} exercises</p>;
};

export default Total;
