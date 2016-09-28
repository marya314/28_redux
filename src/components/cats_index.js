import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

function CatsIndex(props){
		// debugger
    return (
      <div>
        <h1>🐱 prrrrrrrrrrrrrrrrr! 🐱</h1>
        <ul>
        	{props.cats.map(cat => <li key={cat.id}><Link to={`/cats/${cat.id}`}>{cat.name}</Link></li>)}

        </ul>
        {props.children}
      </div>
    )
};

function MapStateToProps(state){
	return{
		cats: state.cats
	}
}

// what is this doing??? check abramov's blog post
// on medium
const componentCreator = connect(MapStateToProps)
export default componentCreator(CatsIndex)
