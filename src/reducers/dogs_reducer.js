// respond to an action type of fetch_cats and that should return a payload of all the cats, by defualt thats an empty array

export default function dogsReducer(state=[], action){
	switch (action.type){
		case 'FETCH_DOGS':
			return action.payload
		default:
			return state
	}
}
