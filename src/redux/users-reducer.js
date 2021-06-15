const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = { 
    users: [
    {id: 1, photoUrl: 'https://st2.depositphotos.com/3687485/10944/v/950/depositphotos_109443302-stock-illustration-happy-woman-face-vector-illustration.jpg', followed: false, fullName:'Dima', status:'Grear guy.', location: {city: 'Minsk', country: 'Belarus'}},
    {id: 2, photoUrl: 'https://st2.depositphotos.com/3687485/10944/v/950/depositphotos_109443302-stock-illustration-happy-woman-face-vector-illustration.jpg', followed: true, fullName:'Lera', status:'So pretty!', location: {city: 'London', country: 'England'}},
    {id: 3, photoUrl: 'https://st2.depositphotos.com/3687485/10944/v/950/depositphotos_109443302-stock-illustration-happy-woman-face-vector-illustration.jpg', followed: false, fullName:'Ivan', status:'Codding, as always.', location: {city: 'Kyiv', country: 'Ukraine'}}
],
newPostText: ''
};

let usersReducer = (state = initialState, action) => {
    switch(action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default: 
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;