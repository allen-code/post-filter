import React from 'react';
import Modal from 'react-modal';
import PostItem from './post';

const PostModal = (props) => {
    
    return (
        <div>
            <Modal
                isOpen={props.isPostModalOpen}
            >
            <h1 id="heading">{props.post.title}</h1>
            <div id="full_description">
                <p>{props.post.body}</p>
            </div>
            <button onClick={props.requestCloseFn}>Close Modal...</button>
            </Modal>
        </div>
    );
};

export default PostModal;