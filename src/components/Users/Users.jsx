import React from 'react';

let Users = (props) => {
    return (
        props.users.map(u => <div key={u.id}>
            <div>
                <img style={{width: 90 + "px"}} src={u.photoUrl} alt =""/>
                {u.followed 
                    ? <button onClick = {() => {props.unfollow(u.id)}}>Follow</button>
                    : <button onClick = {() => {props.follow(u.id)}}>UnFollow</button>}
            </div>
            <div>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </div>
        </div>)
    )
}

export default Users;