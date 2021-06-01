import React, { createContext, useCallback, useContext, useState } from "react"
import api from '../services/api'

interface AuthState {
    token: string
    user: object
}

interface LoginCredentials {
    email: string
    password: string
}

interface AuthContextData {
    user: object
    login(credentials: LoginCredentials): Promise<void>
    logout(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
    
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@Ecoblog:token')
        const user = localStorage.getItem('@Ecoblog:user')

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`
            return { token, user: JSON.parse(user) }
        }

        return {} as AuthState
    })

    const logout = useCallback(() => {
        localStorage.removeItem('@Ecoblog:token')
        localStorage.removeItem('@Ecoblog:user')

        setData({} as AuthState)
    }, [])

    const login = useCallback( async ({ email, password }) => {

        const response = await api.post('sessions', {
            email,
            password, 
        })

        const { token, user } = response.data

        localStorage.setItem('@Ecoblog:token', token)
        localStorage.setItem('@Ecoblog:user', JSON.stringify(user))

        api.defaults.headers.authorization = `Bearer ${token}`

        setData({ token, user })
    }, [])

    return (
        <AuthContext.Provider value={{ user: data.user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext)

    return context
}
