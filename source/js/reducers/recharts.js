import  { RECHARTS_CREATE, RECHARTS_UPDATE } from 'js/actions/recharts';

const initialState =
	[
		{ name: 'Obama', vote: 10 },
		{ name: 'Clinton', vote: 5 }
	];

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case RECHARTS_CREATE:
		case RECHARTS_UPDATE:
			return [...payload];
		default:
			return state;
	}
}
