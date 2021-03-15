
import axios from 'axios';

const BASE_URL="http://localhost:10899/user/";

export function loginUser(user){
    console.log("I am in login action",user);
  var promise=axios.post(`${BASE_URL}login`,user);
  return {
      type:"LOGIN",
      payload:promise
  }
}