import React from 'react'
import { Switch, Route } from "react-router-dom";

import LoginCMS from '../pages/admin/Login'
import Dashboard from '../pages/admin/Dashboard'
import UsersCMS from '../pages/admin/Users'
import PublicationsCMS from '../pages/admin/Publications'
import CommentsCMS from '../pages/admin/Comments'
import TagsCMS from '../pages/admin/Tags'
import CategoriesCMS from '../pages/admin/Categories'


const Routes: React.FC = () => (
    
    <Switch>
        <Route path="/eco-admin" exact component={LoginCMS}/>
        <Route path="/eco-admin/dashboard" component={Dashboard}/>
        <Route path="/eco-admin/users" component={UsersCMS}/>
        <Route path="/eco-admin/publications" component={PublicationsCMS}/>
        <Route path="/eco-admin/comments" component={CommentsCMS}/>
        <Route path="/eco-admin/tags" component={TagsCMS}/>
        <Route path="/eco-admin/categories" component={CategoriesCMS}/>
    </Switch>

)

export default Routes