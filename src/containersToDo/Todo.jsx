import React, { Component } from 'react';
import { connect } from "react-redux";

import { addTask, removeTask, completeTask } from "../redux/actions/actionTask";
import { changeFilter } from "../redux/actions/actionFilter";

import ToDoInput from './../components/ToDo_Input/ToDo_Input';
import ToDoList from './../components/ToDo_List/ToDo_List';
import Footer from './../components/Footer/Footer';

import './Todo.css';


class ToDo extends Component {

    state = {
        taskText: ""
    };

    handleInputChange = ({ target }) => {
        this.setState({
            taskText: target.value
        })
    };

    addTask = ({ key }) => {
        const { taskText } = this.state;

        if(taskText.length > 3 && key === "Enter") {
            const { addTask } = this.props;
            addTask((new Date()).getTime(), taskText, false);

            this.setState({ taskText: "" });
        }

    };

    filterTasks = (tasks, activeFilter) => {
        switch (activeFilter) {
            case "completed":
                return tasks.filter(task => task.isCompleted);
            case "active":
                return tasks.filter(task => !task.isCompleted);
            default:
                return tasks;
        }
    };

    getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted);

    render() {
        const { taskText } = this.state;
        const { tasks, removeTask, completeTask, filters, changeFilter } = this.props;
        const isTasksExist = tasks && tasks.length > 0;
        const filterTasks = this.filterTasks(tasks, filters);
        const getActiveTasksCounter = this.getActiveTasksCounter(tasks);

        return (
            <div className="todo-wrapper">
                <ToDoInput  onKeyPress={ this.addTask } onChange={ this.handleInputChange } value={ taskText }/>
                {isTasksExist && <ToDoList tasksList={ filterTasks } removeTask={ removeTask } completeTask={ completeTask }/>}
                {isTasksExist && <Footer  changeFilter={ changeFilter } amount={ getActiveTasksCounter.length } filters={ filters } />}
            </div>
        );
    }
}

const mapStateToProps = ({ tasks, filters }) => ({
    tasks,
    filters
});


export default connect(mapStateToProps,
    { addTask, removeTask, completeTask, changeFilter })(ToDo);