import React from 'react';
import { BrowserRouter, Switch, Route, RouteProps, Redirect } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

import Landing from './Pages/Landing';
import Login from './Pages/Login';
import RecoverPassword from './Pages/RecoverPassword';
import Error from './Pages/Error';
import getIsAuth from './services/getIsAuth';

const PrivateRoute: React.FC<RouteProps> = (props) => {
    const isAuth = getIsAuth();

    if ( isAuth ) return <Route { ...props } />
    else return <Redirect to="/" />
};

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* Rotas */}

                <Route path="/" exact component={Landing} />
                <Route path="/login" component={Login} />
                <Route path="/recover" component={RecoverPassword} />
                <Route path="/error" component = { Error } />
                <PrivateRoute path="/dashboard" exact component={ Dashboard } />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;