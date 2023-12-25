import Satisfaction from 'components/Satisfaction/Satisfaction';
import Reset from 'components/Reset/Reset';
function App() {
	const values = ['Good', 'Ok', 'Bad'];

	return (
		<>
			<ul>
				{values.map((val) => {
					return <Satisfaction key={val} satisfaction={val} />;
				})}
			</ul>
			<Reset />
		</>
	);
}

export default App;
