import React from 'react'
import { Switch, Route } from "react-router-dom";

import LoginCMS from '../pages/LoginCMS'
//import Repository from '../pages/Repository'

const Routes: React.FC = () => (
    
    <Switch>
        <Route path="/painel-administrativo" exact component={LoginCMS}/>
    </Switch>

)

export default Routes