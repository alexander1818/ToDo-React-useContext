import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import TaskListContextProvider from '../context/TaskListContext'
import WeatherListContextProvider from '../context/WeatherListContext'
import Header from './Header';
import Footer from './Footer';
import AddCity from './AddCity'
import '../app.css';

const App = () => {
  return (
    <TaskListContextProvider>
      <WeatherListContextProvider>
        <Router>
          <div className="container">
            <div className="app-wrapper">
              <Header />
              <div className="main">
              </div>
              <Footer />
            </div>
            <AddCity />
          </div>
        </Router>
      </WeatherListContextProvider>
    </TaskListContextProvider>
  )
}

export default App
