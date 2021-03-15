import React,{useState} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { loginUser } from '../actions/index';

function Login(props){

    console.log(' I am in login props',props);
    if(props.isUserLoggedIn){
      console.log(' I am in props', props.isUserLoggedIn);
      props.history.push('/adminhome');
    }

     const [state,setState]= useState(
        {
                            password: "",
                            emailId: "",
                            role:'ROLE_ADMIN',

        }
     );

    const  captureData = (event) =>{
          var name=event.target.name;
          var value=event.target.value;
          setState( previousState => ({
                                        ...previousState, [name]:value
                                    }));
      }

         const  login=(event)=>{
            event.preventDefault();
            console.log('data',state);
           props.loginUser(state);
           console.log('isUserloggedIn',props.isUserLoggedIn)

         
      }
      return(
              <div>
        
         <form className="form-horizontal">
          <fieldset>
            <div id="legend">
              <legend className="">Login</legend>
            </div>
         
            <div className="control-group">
          
              <label className="control-label" htmlFor="email">E-mail</label>
              <div className="controls">
                <input onChange={captureData} size="50" type="text" id="email" name="emailId" placeholder="" className="input-xlarge"/>
                
              </div>
            </div>
         
            <div className="control-group">
              
              <label className="control-label" htmlFor="password">Password</label>
              <div className="controls">
                <input onChange={captureData} size="50" type="password" id="password" name="password" placeholder="" className="input-xlarge"/>
                <p ></p>
              </div>
            </div>
            <div className="control-group">
              
              <div className="controls">
                <button onClick={login} className="btn btn-success">Login</button>
              </div>
            </div>
          </fieldset>
        </form> 
                        </div>
                )
      
}

function mapStatetoProps(appState){
  console.log('appState',appState);
  return {isUserLoggedIn:appState.isUserLoggedIn}
}
 export default connect(mapStatetoProps, dispatch => bindActionCreators({loginUser},dispatch) ) (Login);
