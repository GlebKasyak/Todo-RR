import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from './../ToDo_Item/ToDo_Item';

import './ToDo_List.css';

const ToDoList = ({ tasksList, removeTask, completeTask }) => (
    <ul className="todo-list">
        {tasksList.map(({ id, text, isCompleted }) => (
            <ToDoItem
                removeTask={ removeTask }
                completeTask={ completeTask }
                key={ id }
                text={ text }
                isCompleted={ isCompleted }
                id={ id }
            />
        ))}
    </ul>
);

ToDoList.propTypes = {
    tasksList: PropTypes.array,
    removeTask: PropTypes.func,
    completeTask: PropTypes.func
};

ToDoList.defaultProps = {
    tasksList: [],
    removeTask: () => {},
    completeTask: () => {}
};

export default ToDoList;