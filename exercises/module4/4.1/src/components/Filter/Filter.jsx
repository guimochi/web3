const Filter = ({ filter, setFilter }) => {
	const handleFilterChange = (e) => setFilter(e.target.value);

	return (
		<div>
			filter shown with <input onChange={handleFilterChange} value={filter} />
			<button onClick={() => setFilter('')}>clear</button>
		</div>
	);
};

export default Filter;
