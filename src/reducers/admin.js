export default function(state=null,action){
    switch(action.type){
         case 'LOGIN':  
         console.log("I am in LOGIN case");
             if(action.payload.data.token){
                 sessionStorage.setItem('token',action.payload.data.token);
                 console.log("I am returning true");
                 return true;
             }
             else
             {
                 return false;
             }
    }
    return state;
}
