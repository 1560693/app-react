import React, { useState } from 'react';
import Block_heading from '../components/block-heading';
import TodoList from '../components/TodoList';
 
function Module_2(props) {
    const todoList = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
            thumb: require('../../../image/cafe1.jpg').default,
            status: 'cafe',
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
            thumb: require('../../../image/cafe2.jpg').default,
            status: 'cafe',
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
            thumb: require('../../../image/cafe3.jpg').default,
            status: 'cafe',
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
            thumb: require('../../../image/food1.jpg').default,
            status: 'food',
        },
        {
            id: 5,
            title: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
            thumb: require('../../../image/food2.jpg').default,
            status: 'food',
        },
        {
            id: 6,
            title: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
            thumb: require('../../../image/food3.jpg').default,
            status: 'food',
        },
    ];

    // const buttons = [
    //     {
    //         id: 1,
    //         btnName: 'All',
    //         eventBtn: 'handleShowAllClick',
    //     },
    //     {
    //         id: 2,
    //         btnName: 'New',
    //         eventBtn: 'handleShowNewClick',
    //     },
    //     {
    //         id: 3,
    //         btnName: 'Old',
    //         eventBtn: 'handleShowOldClick',
    //     },
    // ];
    
    const [fillteredStatus, setFillteredStatus] = useState('all');

    const handleShowAllClick = () => {
        setFillteredStatus('all');
    }

    const handleShowNewClick = () => {
        setFillteredStatus('cafe');
    }

    const handleShowOldClick = () => {
        setFillteredStatus('food');
    }

    const renderTodoList = todoList.filter(todo => fillteredStatus === 'all' || fillteredStatus === todo.status);
    
    return (
        <div className="mnmd-block mnmd-block--fullwidth featured-module-2">
            <div className="mnmd-block__inner">
                {/* <Block_heading/> */}
                <div id="js-active-tabs" className="tab text-center">
                    <button className="btn-default tab-links is-active" onClick={handleShowAllClick}>All</button>
                    <button className="btn-default tab-links" onClick={handleShowNewClick}>coffee</button>
                    <button className="btn-default tab-links" onClick={handleShowOldClick}>street food</button>
                </div>
                <TodoList todoList={renderTodoList}/>
            </div>
        </div>
    );
}

export default Module_2;