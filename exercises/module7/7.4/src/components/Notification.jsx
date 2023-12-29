import { useContext } from 'react';
import { Context as AnecdoteContext } from '../contexts/AnecdoteContext';

const Notification = () => {
	const { notification, setNotification } = useContext(AnecdoteContext);
	if (notification === '') {
		return null;
	}
	setTimeout(() => {
		setNotification('');
	}, 5000);
	return <div className='notification'>{notification}</div>;
};

export default Notification;
