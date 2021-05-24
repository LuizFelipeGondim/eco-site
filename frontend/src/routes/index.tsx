import React from 'react'
import { Switch, Route } from "react-router-dom";

//Página
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Category from '../pages/Category'
import Publication from '../pages/Publication'

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

import { AuthProvider } from '../context/AuthContext'

const Routes: React.FC = () => (
    
    <Switch>
        <AuthProvider>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/category" component={Category}/>
            <Route path="/publication" component={Publication}/>

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
        </AuthProvider>
    </Switch>

)

export default Routes