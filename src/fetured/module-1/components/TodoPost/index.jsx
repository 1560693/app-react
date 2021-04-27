import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

TodoPost.propTypes = {
    todo: PropTypes.object.isRequired,
};

function TodoPost({todo}) {
    return (
        <article className="post post--vertical">
            <div className="post__thumb object-fit">
                <Link to="/">
                    <img src={todo.thumb} alt=""/>
                </Link>
            </div>
            <div className="post__text">
                <h3 className="post__title f-24 f-w-700">
                    <Link>
                        {todo.title}
                    </Link>
                </h3>
            </div>
        </article>
    );
}

export default TodoPost;