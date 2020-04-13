import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const Task = ({ task }) => {
    const { removeTask, findItem } = useContext(TaskListContext)
    console.log(task)
    return (
        <li className="list-item">
            <span>{task.title}</span>
            <div className="list-item__buttons">
                <button className="btn-delete task-btn"
                    onClick={() => removeTask(task.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
                <button className="btn-edit task-btn"
                    onClick={() => findItem(task.id)}>
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    )
}

export default Task
