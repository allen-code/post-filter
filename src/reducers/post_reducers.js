import * as types from '../constants/action_types';

const initialState = {
    posts: null,
    fetching: false,
    error: null
}

export const postsReducer = (state = initialState, action) =>
{
    console.log('postsReducer::', action)
    switch (action.type)
    {
        case types.FETCH_POSTS:
            return {
                ...state,
                fetching: true
            }
        case types.RECEIVE_POSTS:
            return {
                ...state,
                fetching: false,
                posts: Object.assign({}, action.payload.data)
            }
        case types.RECEIVE_POSTS_ERROR:
            return {
                ...state,
                fetching: false,
                error: Object.assign({}, action.payload) 
            }
        default:
            return state;
    }
}

