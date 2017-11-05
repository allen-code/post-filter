import axios from 'axios';
import * as types from '../constants/action_types';
import {APIS} from '../constants/apis';

export const fetchPosts = () =>
{
    return (dispatch) => {
        dispatch({type: types.FETCH_POSTS});
        axios.get(APIS.BASE_URL + APIS.POST_URL).then(posts =>
        {
            dispatch(receivePosts(posts))
        })
        .catch(err =>
        {
            dispatch(receivePostsError(err))
        })
    }
}

export const receivePosts = (posts) =>
{
    return {
        type: types.RECEIVE_POSTS,
        payload: posts
    }
}

export const receivePostsError = (err) =>
{
    return {
        type: types.RECEIVE_POSTS_ERROR,
        payload: err
    }
}

export const openPostModal = (post) =>
{
    return {
        type: types.OPEN_POST_MODAL,
        payload: post
    }
}

export const closePostModal = (post) =>
{
    return {
        type: types.CLOSE_POST_MODAL,
        payload: post
    }
}