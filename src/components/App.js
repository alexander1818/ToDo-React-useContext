import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TaskListContextProvider from '../context/TaskListContext'
import Header from './Header';
import Footer from './Footer';
import '../app.css';

const App = () => {
  return (
    <TaskListContextProvider>
      <Router>
        <div className="container">
          <div className="app-wrapper">
            <Header />
            <div className="main">
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </TaskListContextProvider>
  )
}

export default App
