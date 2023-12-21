import Display from 'components/Display/Display';
import Button from 'components/Button/Button';
import useLocalStorage from 'hooks/useLocalStorage';

const App = () => {
	const [counter, setCounter] = useLocalStorage('counter', 0);

	return (
		<>
			<Display counter={counter} />
			<Button changeCount={setCounter} delta={1} text='plus' />
			<Button delta={-counter} changeCount={setCounter} text='reset' />
			<Button delta={-1} changeCount={setCounter} text='minus' />
		</>
	);
};

export default App;
