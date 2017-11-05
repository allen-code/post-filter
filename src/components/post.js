import React from 'react';

const PostItem = (props) => {
    return (
        <a onClick={props.onPostClicked}>
            {props.post.title}
        </a>
    );
};

export default PostItem;