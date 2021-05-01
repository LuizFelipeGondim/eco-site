import React from 'react'
import { Switch, Route } from "react-router-dom";

//Painel CMS
import LoginCMS from '../pages/admin/Login'
import DashboardCMS from '../pages/admin/Dashboard'
import UsersCMS from '../pages/admin/Users'
import PublicationsCMS from '../pages/admin/Publications'
import CommentsCMS from '../pages/admin/Comments'
import TagsCMS from '../pages/admin/Tags'
import CategoriesCMS from '../pages/admin/Categories'
import ProfileCMS from '../pages/admin/UserProfile'
import CreateUserCMS from '../pages/admin/CreateUser'
import CreatePublicationCMS from '../pages/admin/CreatePublication'

//Página

const Routes: React.FC = () => (
    
    <Switch>
        <Route path="/eco-admin" exact component={LoginCMS}/>
        <Route path="/eco-admin/dashboard" component={DashboardCMS}/>
        <Route path="/eco-admin/users" component={UsersCMS}/>
        <Route path="/eco-admin/publications" component={PublicationsCMS}/>
        <Route path="/eco-admin/comments" component={CommentsCMS}/>
        <Route path="/eco-admin/tags" component={TagsCMS}/>
        <Route path="/eco-admin/categories" component={CategoriesCMS}/>
        <Route path="/eco-admin/profile" component={ProfileCMS}/>
        <Route path="/eco-admin/create-user" component={CreateUserCMS}/>
        <Route path="/eco-admin/create-publication" component={CreatePublicationCMS}/>

        
    </Switch>

)

export default Routes