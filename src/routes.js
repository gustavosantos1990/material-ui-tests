import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar"
import Enterprise from './Pages/Enterprise'

import { isAuthenticated } from './Services/auth'
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <React.Fragment>
                    <NavBar />
                    <Component {...props} />
                </React.Fragment>
            ) : (
                    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                )
        }
    />
);

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <ProtectedRoute path="/home" component={Home} />
                <ProtectedRoute path="/enterprise" component={Enterprise} />
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    );
}