import {combineReducers} from 'redux';
import {postsReducer} from './post_reducers';
import {currentPostsReducer} from './current_post_reducers';

export default combineReducers({
    postsReducer,
    currentPostsReducer
})