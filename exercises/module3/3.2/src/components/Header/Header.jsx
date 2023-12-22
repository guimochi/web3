import logo from './LOGO_HE_VINCI.png';

export const Header = (props) => {
	return (
		<>
			<img src={logo} alt='logo Vinci'></img>
			<h1>{props.course}</h1>
		</>
	);
};
