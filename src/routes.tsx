import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

import Landing from './Pages/Landing';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* Rotas */}

                <Route path="/" exact component={ Landing } />
                <Route path="/dashboard" exact component={ Dashboard } />
            </Switch>
        </BrowserRouter>
    ); 
}

export default Routes;