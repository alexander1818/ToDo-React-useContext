import React from 'react'
import '../app.css';
import TaskList from './TaskList';
import TaskListContextProvider from '../context/TaskListContext'
import TaskForm from './TaskForm';
import Header from './Header';
import Footer from './Footer';


const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
          <Footer />
        </div>
      </div>
    </TaskListContextProvider>

  )
}

export default App
