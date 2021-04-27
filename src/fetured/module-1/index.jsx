import React, { UseState } from 'react';
import PropTypes from 'prop-types';
import Block_heading from './components/block-heading';
import TodoList from './components/TodoList';
 
module_1.propTypes = {
    
};

function module_1(props) {
    const todoList = [
        {
            id: 1,
            title: 'A 7-Day Southern California Road Trip Itinerary',
            thumb: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            status: 'new',
        },
        {
            id: 2,
            title: 'The 18 Best Things to See and Do in Oslo',
            thumb: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            status: 'new',
        },
        {
            id: 3,
            title: 'California Road Trip: A 21-Day Suggested Itinerary',
            thumb: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            status: 'new',
        },
        {
            id: 4,
            title: 'The 18 Best Things to See and Do in Oslo',
            thumb: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            status: 'new',
        },
        {
            id: 5,
            title: 'The 18 Best Things to See and Do in Oslo',
            thumb: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            status: 'new',
        },
        {
            id: 6,
            title: 'California Road Trip: A 21-Day Suggested Itinerary',
            thumb: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            status: 'new',
        },
    ];
 
    const renderTodoList = todoList.filter(todo => todo.status === 'new')
    return (
        <div className="mnmd-block mnmd-block--fullwidth featured-module-1">
            <div className="mnmd-block__inner">
                <Block_heading/>
                <TodoList todoList={renderTodoList}  />
                {/* <div className="load-more">
                    <button className="btn-default btn-loadmore">Load More</button>
                </div> */}
            </div>
        </div>
    );
}

export default module_1;