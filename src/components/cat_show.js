import React from 'react'
import {connect} from 'react-redux'

export function CatShow(props){
	return(
		<div>
			<h1>{props.cat.name}</h1>
		</div>
	)
}

function MapStateToProps(state, ownProps){
	const cat = state.cats.find((cat) => {return cat.id == ownProps.params.id} )
	return {cat: cat}

}

// what is this doing??? check abramov's blog post
// on medium
const componentCreator = connect(MapStateToProps)
export default componentCreator(CatShow)
