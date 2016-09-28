import React from 'react';
import NavBar from './nav_bar';
import {Link} from 'react-router'

export default (props) => {
  return (
    <div>
      <NavBar  title="CatBook" url="/">
      </NavBar>
    	<div className='container'>
      	<Link to="/cats">See the Cats!</Link>
      	<br />
      	<Link to="/cats/new">Add a cat!</Link>
      	<br />
      	<Link to="/dogs">See the Dogs!</Link>
    	</div>
      	{props.children}

    </div>
  )
};
