import React from 'react'
import TaskForm from './TaskForm';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './MainPage.css';
import Weather from './Weather'


const MainPage = () => {
    return (
        <Router>
            <div className="main-page">
                <Link className="main-page__link" to="./TaskForm"> <p>Task manager</p></Link>
                <Link className="main-page__link" to="./Weather"> <p>Weather</p></Link>
                <Switch>
                    <Route exact path="/TaskForm" component={TaskForm} />
                    <Route path="/Weather" component={Weather} />
                </Switch>
            </div>
        </Router>
    )
}

export default MainPage
