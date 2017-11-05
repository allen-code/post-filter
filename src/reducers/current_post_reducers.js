import * as types from '../constants/action_types';

const initialState = {
    currentPost: null,
}

export const currentPostsReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case types.OPEN_POST_MODAL:
            return {
                ...state,
                currentPost: action.payload
            }
        case types.CLOSE_POST_MODAL:
            return {
                ...state,
                currentPost: null
            }
        default:
            return state;
    }
}

