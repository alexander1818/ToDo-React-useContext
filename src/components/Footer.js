import React, { useState } from 'react'
import MainPage from './MainPage';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

const Footer = () => {
    const [block, setBlock] = useState(false)

    const handleBlock = (block) => {
        if (!block) {
            setBlock(true)
        }
        else {
            setBlock(false)
        }
        console.log(block)
    }

    return (
        <Router>
            <div className="footer">
                {!block ? (<Link className="line" to="./MainPage"
                    onClick={() => handleBlock(block)}><div>Unblock</div></Link>)
                    :
                    (<Link className="line" to="./"
                        onClick={() => handleBlock(block)}><div>Block</div></Link>)}
                <Switch>
                    <Route exact path="/MainPage" component={MainPage} ></Route>
                    <Route exact path="/"></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Footer
