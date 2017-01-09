export const RECHARTS_CREATE = 'RECHARTS_CREATE';
export const RECHARTS_UPDATE = 'RECHARTS_UPDATE';

export function rechartsUpdate( index ) {
	return (dispatch, getState) => {
		const vote = getState().vote;
		vote[index].vote++;

		return dispatch({
			type: RECHARTS_UPDATE,
			payload: vote
		})
	}
}

