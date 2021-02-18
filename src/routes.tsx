import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

import Landing from './Pages/Landing';
import Login from './Pages/Login';
import RecoverPassword from './Pages/RecoverPassword';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* Rotas */}
                <Route path="/" exact component={Landing} />
                <Route path="/login" component={Login} />
                <Route path="/recover" component={RecoverPassword} />
                <Route path="/dashboard" exact component={ Dashboard } />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;