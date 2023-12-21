const Button = ({ delta, changeCount, text }) => {
	const handleClick = (e) => {
		changeCount(e.target.dataset.delta);
	};
	return (
		<button data-delta={delta} onClick={handleClick}>
			{text}
		</button>
	);
};

export default Button;
