import React from 'react'
import { Switch, Route } from "react-router-dom";

import LoginCMS from '../pages/LoginCMS'
import Dashboard from '../pages/Dashboard'


const Routes: React.FC = () => (
    
    <Switch>
        <Route path="/painel-administrativo" exact component={LoginCMS}/>
        <Route path="/painel-administrativo/dashboard" component={Dashboard}/>
    </Switch>

)

export default Routes