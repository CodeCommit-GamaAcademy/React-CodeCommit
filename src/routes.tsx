import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './Pages/Landing';
import RecoverPassword from './Pages/RecoverPassword';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* Rotas */}

                <Route path="/" exact component={ Landing } />
                <Route path="/recover" component={ RecoverPassword } />
            </Switch>
        </BrowserRouter>
    ); 
}

export default Routes;