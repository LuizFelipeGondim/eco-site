import React from 'react'
import { Switch } from "react-router-dom";

import Route from './Route'

//Página
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Publication from '../pages/Publication'
import Quotes from '../pages/Quotes'
import Weather from '../pages/Weather'
import Forum from '../pages/Forum'
import CreateDoubt from '../pages/CreateDoubt'
import Doubt from '../pages/Doubt'
import ProfileDoubts from '../pages/ProfileDoubts'
import Profile from '../pages/Profile'

//Painel CMS
import UsersCMS from '../pages/admin/Users'
import PublicationsCMS from '../pages/admin/Publications'
import CategoriesCMS from '../pages/admin/Categories'
import ProfileCMS from '../pages/admin/UserProfile'
import CreateUserCMS from '../pages/admin/CreateUser'
import EditPublicationCMS from '../pages/admin/EditPublication'
import PublicationCMS from '../pages/admin/Publication'

const Routes: React.FC = () => (
    
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" notAuthenticated component={Login} />
        <Route path="/register" component={Register}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/publication/:slug" component={Publication}/>
        <Route path="/quotes" component={Quotes}/>
        <Route path="/weather" component={Weather}/>
        <Route path="/forum" isPrivate exact component={Forum}/>
        <Route path="/forum/create" isPrivate component={CreateDoubt}/>
        <Route path="/forum/:slug" isPrivate component={Doubt}/>
        <Route path="/profile/" isPrivate exact component={Profile}/>
        <Route path="/profile/doubts" isPrivate component={ProfileDoubts}/>

        <Route path="/eco-admin" exact isAdmin component={ProfileCMS}/>
        <Route path="/eco-admin/users" isAdmin component={UsersCMS}/>
        <Route path="/eco-admin/publications" isAdmin component={PublicationsCMS}/>
        <Route path="/eco-admin/categories" isAdmin component={CategoriesCMS}/>
        <Route path="/eco-admin/create-user" isAdmin component={CreateUserCMS}/>
        <Route path="/eco-admin/edit-publication/:slug" isAdmin component={EditPublicationCMS}/>
        <Route path="/eco-admin/create-publication" isAdmin component={PublicationCMS}/>
    </Switch>

)

export default Routes