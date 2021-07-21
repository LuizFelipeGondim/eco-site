import React from 'react'
import { 
    Route as ReactDOMRoute,
    RouteProps as ReactDOMRouterProps,
    Redirect,
} from 'react-router-dom'

import { useAuth } from '../context/AuthContext'

interface RouteProps extends ReactDOMRouterProps {
    isPrivate?: boolean
    notAuthenticated?: boolean
    isAdmin?: boolean
    component: React.ComponentType
}

const Route: React.FC<RouteProps> = ({ 
    isPrivate = false, 
    notAuthenticated = false,
    isAdmin = false,
    component: Component, ...rest 
}) => {
    const { user, isStaff } = useAuth()

    return (
        <ReactDOMRoute {...rest} 
                
            render={({ location }) => {
                return isAdmin ? ((!!user ? (isStaff ? <Component /> :
                            <Redirect 
                                to={{ 
                                    pathname: '/',
                                    state: { from: location },
                                }}
                            />
                        ) : 
                            <Redirect 
                                to={{ 
                                    pathname: '/login',
                                    state: { from: location },
                                }}
                            />
                        ))        
                    : (isPrivate ? ((!!user ? <Component /> : 
                        <Redirect 
                            to={{ 
                                pathname: '/login',
                                state: { from: location },
                            }}
                        />
                    )) : (notAuthenticated && !!user ? 
                        <Redirect 
                            to={{ 
                                pathname: '/',
                            }}
                        /> : <Component /> ))  
            }} 
        />
    )
}

export default Route