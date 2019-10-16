import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import App from "./App"
import Other from "./Other"
import NavBar from "./NavBar"

/*
const AuthenticatedRoute = ({ exact, path, component: Component }) => (
    <Route exact={exact} path={path} render={(props => (
        <React.Fragment>
            <NavBar />
            <Component {...props} />
        </React.Fragment>
    ))} />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <AuthenticatedRoute exact path="/" component={App} />
            <AuthenticatedRoute path="/other" component={Other} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);
*/

const routes = [
    {
        path: "/",
        exact: true,
        component: () => <App />
    },
    {
        path: "/other",
        component: () => <Other />
    }
]

export default function SidebarExample() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} exact={route.exact}
                        children={props => (<route.component {...props} />)} />
                ))}
            </Switch>
        </BrowserRouter>
    );
}

//sharing navbar: https://reacttraining.com/react-router/web/example/sidebar
//withRouter> https://reacttraining.com/react-router/core/api/withRouter

//How to prevent re-render?