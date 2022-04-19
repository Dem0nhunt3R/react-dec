import React from 'react';

const Comment = ({comment}) => {
    const {id, name} = comment;

    return (
        <div>
            {id}--{name}
        </div>
    );
};

export default Comment;