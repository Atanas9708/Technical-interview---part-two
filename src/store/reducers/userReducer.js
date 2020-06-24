import { FETCH_SUCCESS, FETCH_FAILED, SAVE_CHANGES, GET_POSTS_SUCCESS } from '../actions/actionTypes';

const intialState = { users: [] };

export default function users(state = intialState, action) {

  switch (action.type) {
    case FETCH_SUCCESS:
      action.data.map(u => u.posts = []);
      return Object.assign({}, state, {
        users: action.data
      });

    case SAVE_CHANGES: 
      //using an IIFE to avoid variable scope issues
      return (function(){
        const user = state.users.filter(u => u.id === action.user.userId)[0];
        const index = state.users.indexOf(user);
  
        return Object.assign({}, state, {
          users: [...state.users.slice(0, index),
          Object.assign({}, state.users[index], action.user),
          ...state.users.slice(index + 1)]
        });
      })();

     case GET_POSTS_SUCCESS: 
      //using an IIFE to avoid variable scope issues
      return (function() {
        const id = action.posts.id;
        const user = state.users.filter(u => u.id === id)[0];
        const index = state.users.indexOf(user);

        return Object.assign({}, state, {
          users: [...state.users.slice(0, index), 
          Object.assign({}, state.users[index], {
            ...user,
            posts: [...user.posts, action.posts]
          }),
          ...state.users.slice(index + 1)]
        });

      })();

      case FETCH_FAILED:
        alert(action.err);
      
    default:
      return state;
  }

}