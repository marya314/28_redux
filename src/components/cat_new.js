import React from 'react'
import * as actions from '../actions'
// import {fetchCats} from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class CatNew extends React.Component{

	constructor(props){
		super(props)
		this.createCat = this.createCat.bind(this)
	}

	createCat(event){
		event.preventDefault()
		const newCatName = this.refs.input.value
		this.props.actions.addCat({name: newCatName})

	}

	render(){
		return(
			<div>
				<h1>Add a Kitty!</h1>
				<form onSubmit={this.createCat}>
					<label htmlFor="catName">Name</label>
					<input ref='input' id="catName" />
				</form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(CatNew)

// this component should render a form for a new cat
// when user submits a form, we should dispatch
// an action with type 'ADD_CAT' and payload of new cat's name
// it shuld alll go to thecats reducer which will
// add the new cat to state
// all copmonents hould rerender to show new cat
// maybe this can't be a functional ocmponent