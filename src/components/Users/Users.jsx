import * as axios from 'axios';
import React from 'react';
import userPhoto from '../../assets/images/user.png'



let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {   
            props.setUsers(response.data.items);
            });
        }
    }
  
    
    return (
        <div>
        <button onClick = {getUsers}>Get Users</button>
        {props.users.map(u => <div key={u.id}>
            <div>
                <img 
                    style={{width: 90 + "px"}} 
                    src={u.photos.small !==null ? u.photos.small : userPhoto} alt =""/>
                {u.followed 
                    ? <button onClick = {() => {props.unfollow(u.id)}}>Follow</button>
                    : <button onClick = {() => {props.follow(u.id)}}>UnFollow</button>}
            </div>
            <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                {/* <div>{u.location.country}</div>
                <div>{u.location.city}</div> */}
            </div>
        </div>)}
        </div>
    )
}

export default Users;