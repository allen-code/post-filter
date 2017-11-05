import React, { Component } from 'react';
import PostItem from '../components/post';
import PostModal from '../components/postModal';

import {store} from '../store/store';
import {connect} from 'react-redux';
import {openPostModal, closePostModal} from '../actions/post_actions';

class AlphabetGroup extends Component {

    handlePostClicked = (post) =>
    {
        store.dispatch(openPostModal(post))
    }

    handleCloseFn = (post) =>
    {
        store.dispatch(closePostModal(post))
    }

    render() {
        return (
            <div>
                <div><b>{this.props.label}:</b></div>
                <div>{this.props.postArray.map(postItem => <div><PostItem key={postItem.id} post={postItem} onPostClicked={this.handlePostClicked.bind(null, postItem)}/></div>)}</div>
                {this.props.currentPostsReducer.currentPost ? <PostModal
                    isPostModalOpen={this.props.currentPostsReducer.currentPost ? true : false}
                    post={this.props.currentPostsReducer.currentPost}
                    requestCloseFn={this.handleCloseFn.bind(this)}
                /> : ''}
            </div>
        );
    }
}

const mapStateToProps = (state) => {return {...state}}
export default connect(mapStateToProps)(AlphabetGroup);