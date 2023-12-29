import { ProviderWrapper as AnecdoteProviderWrapper } from './contexts/AnecdoteContext.jsx';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

const AppLoader = () => {
	return (
		<AnecdoteProviderWrapper>
			<Router>
				<App />
			</Router>
		</AnecdoteProviderWrapper>
	);
};

export default AppLoader;
