import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TodoPost from '../TodoPost'
import './styles.scss';

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
};

function TodoList({ todoList }) {
    return (
        <ul className="posts-list flex-box flex-box-3i flex-space-30">
            {todoList.map(todo => (
                <li key={todo.id} className={classNames({
                    'list-item': true,
                    'completed': todo.status === 'completed',
                    'new': todo.status === 'new',
                })}>
                    <TodoPost todo={todo}/>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;