import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TodoPost from '../TodoPost'

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
};


function TodoList({ todoList }) {
    return (
        <ul className="posts-list flex-box flex-box-3i flex-space-30">
            {todoList.map(todo => (
                <li key={todo.id} className={classNames({
                    'list-item': true,
                    'streetFood': todo.status === 'food',
                    'coffee': todo.status === 'cafe',
                })}>
                    <TodoPost todo={todo}/>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;