import Display from 'components/Display/Display';
import Button from 'components/Button/Button';
import useLocalStorage from 'hooks/useLocalStorage';

const App = () => {
	const [count, setCount] = useLocalStorage('counter', 0);

	return (
		<>
			<Display counter={count} />
			<Button changeCount={setCount} delta={1} text='plus' />
			<Button delta={-count} changeCount={setCount} text='reset' />
			<Button delta={-1} changeCount={setCount} text='minus' />
		</>
	);
};

export default App;
