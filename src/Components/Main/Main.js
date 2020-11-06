import React from 'react'
import App from "../../App";
import TempBoard from "../Tempboard/TempBoard";
import { BrowserRouter, Route, Switch } from "react-router-dom"


function Main() {
    return (
        <div>
            <Switch>
                <Route path="/" component={App} exact/>
                <Route path="/temp" component={TempBoard} exact/>
            </Switch>
        </div>
    )
}

export default Main
