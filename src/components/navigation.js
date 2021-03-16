import React from 'react';
import {NavLink,Route} from 'react-router-dom';

import Login from '../containers/Login';
import AdminHome from '../containers/adminhome';
class Navigation extends React.Component{
    render()
{
    return(
            <React.Fragment>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <ul className="navbar-nav">
    <li className="nav-item">
     <NavLink className="nav-link" to="/">Home</NavLink>
    </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
    <li className="nav-item">
    <form className="form-inline">
        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </li>
    </ul>
  </nav>
     <Route path="/login" component={Login}></Route>
     <Route path="/adminhome" component={AdminHome}></Route>
     
      
  </React.Fragment>
    )
}
}
export default Navigation;