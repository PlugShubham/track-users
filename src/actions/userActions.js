import { FETCH_USERS, NEW_USER} from './types';


export function fetchUsers(){
    return function(dispatch){
        fetch("https://gorest.co.in/public-api/users?_format=json&access-token=QeUtQCgdsAAeCdFbhUz1h6-HdVJ30zv8xMYR")
        .then(response => response.json())
        .then(json => {
            dispatch({
                type:FETCH_USERS,
                payload:json.result
            })
        })
    }
}

export function addUsers(user){
    return function(dispatch){
        fetch("https://gorest.co.in/public-api/users?_format=json&access-token=QeUtQCgdsAAeCdFbhUz1h6-HdVJ30zv8xMYR",{
            method:"POST",
            body:user
        })
        .then(response => response.json())
        .then(json => {
            dispatch({
                type:NEW_USER,
                payload:json.result
            })
        })
        .catch(err =>{
            console.log(err);
            alert("something went wrong");
        })
    } 
}