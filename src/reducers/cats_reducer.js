// respond to an action type of fetch_cats and that should return a payload of all the cats, by defualt thats an empty array

export default function catsReducer(state=[], action){
	switch (action.type){
		case 'FETCH_CATS':
			return action.payload
		case 'ADD_CAT':
			action.payload.id = state.length + 1
			return [...state, action.payload]
		default:
			return state
	}
}
