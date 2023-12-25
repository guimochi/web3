import React, { useState } from 'react';

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
	const [goodCounter, setGoodCounter] = useState(0);
	const [okCounter, setOkCounter] = useState(0);
	const [badCounter, setBadCounter] = useState(0);

	const increaseGoodCounter = () => setGoodCounter(goodCounter + 1);
	const increaseOkCounter = () => setOkCounter(okCounter + 1);
	const increaseBadCounter = () => setBadCounter(badCounter + 1);

	const resetCounter = () => {
		setGoodCounter(0);
		setOkCounter(0);
		setBadCounter(0);
	};

	const exposedValue = {
		goodCounter,
		okCounter,
		badCounter,
		increaseGoodCounter,
		increaseOkCounter,
		increaseBadCounter,
		resetCounter,
	};

	return (
		<Context.Provider value={exposedValue}>{props.children}</Context.Provider>
	);
};

export { Context, ProviderWrapper };
