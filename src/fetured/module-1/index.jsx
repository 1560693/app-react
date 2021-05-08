import React, { UseState } from 'react';
import Block_heading from './components/block-heading';
import TodoList from './components/TodoList';

function module_1(props) {
    const todoList = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
            thumb: require('../../image/img.jpg').default,
            status: 'new',
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
            thumb: require('../../image/module1.1.jpg').default,
            status: 'new',
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
            thumb: require('../../image/module1.2.jpg').default,
            status: 'new',
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
            thumb: require('../../image/img.jpg').default,
            status: 'old',
        },
        {
            id: 5,
            title: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
            thumb: require('../../image/img.jpg').default,
            status: 'old',
        },
        {
            id: 6,
            title: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
            thumb: require('../../image/img.jpg').default,
            status: 'old',
        },
    ];

    const renderTodoList = todoList.filter((todo) => todo.status === 'new');
    return (
        <div className="mnmd-block mnmd-block--fullwidth featured-module-1">
            <div className="mnmd-block__inner">
                <Block_heading />
                <TodoList todoList={renderTodoList} />
                {/* <div className="load-more">
                    <button className="btn-default btn-loadmore">Load More</button>
                </div> */}
            </div>
        </div>
    );
}

export default module_1;
