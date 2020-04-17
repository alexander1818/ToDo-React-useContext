import React, { useContext, useState, useEffect } from 'react'
import { TaskListContext } from '../context/TaskListContext';
import TaskList from './TaskList';

const TaskForm = () => {
    const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);
    const [title, setTitle] = useState('')

    const handleChange = e => {
        setTitle(e.target.value)
        // console.log(title)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!editItem) {
            addTask(title)
            setTitle('')
        } else {
            editTask(title, editItem.id)
        }
    }

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title)
            console.log(editItem)
        } else {
            setTitle('')
        }
    }, [editItem])

    return (
        <div>
            <h1 className="title">Task Manager</h1>

            <form onSubmit={handleSubmit} className="form">
                <input type="text"
                    onChange={handleChange}
                    value={title}
                    className="task-input"
                    placeholder="Add Task..."
                    required />
                <div className="buttons">
                    <button type="submit"
                        className="btn add-task-btn">{editItem ? 'Edit Task' : 'Add Task'}
                    </button>
                    <button className="btn clear-btn"
                        onClick={clearList}>Clear</button>
                </div>
            </form>
            <TaskList />
        </div>
    )
}

export default TaskForm
