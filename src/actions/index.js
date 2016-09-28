export function fetchCats(){
	const cats = [{id: 1, name: 'Maru'}, {id: 2, name: 'Ming'}, {id: 3, name: 'Grumpy Cat'}]

	return {
		type: 'FETCH_CATS',
		payload: cats
	}
}

export function addCat(catStuff){
	return {
		type: 'ADD_CAT',
		payload: catStuff
	}
}

export function fetchDogs(){
	const dogs = [{id: 1, name: 'Rover'}]

	return {
		type: 'FETCH_DOGS',
		payload: dogs
	}
}
