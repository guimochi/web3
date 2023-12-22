import { useState } from 'react';

const useLocalStorage = (key, initValue) => {
	const value = JSON.parse(localStorage.getItem(key));
	const [count, setCount] = useState(value ? value : initValue);

	const useStorage = (delta) => {
		delta = parseInt(delta);
		setCount(parseInt(count) + delta);
		localStorage.setItem(key, parseInt(count) + delta);
	};

	return [count, useStorage];
};

export default useLocalStorage;
