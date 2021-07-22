import React, { useEffect, useState } from 'react'

import { MainContent, Header, Content } from './styles'
import api from '../../services/api'

interface UserProps {
    first_name: string  
    email: string
    last_name: string
    uf: string
    city: string
    whatsapp: string
    is_staff: boolean
    avatar: string
}

const MainContentGeneric: React.FC = (props) => {
    const [user, setUser] = useState<UserProps>()

    useEffect(() => {
        api.get('/eco-admin/users/profile')
        .then(response => {
            setUser(response.data)
        })
    }, [])
    return (

        <MainContent className="main-content">
            <Header className="header">
  
                <img src={user?.avatar} alt=""/>
                <p>{user?.first_name}</p>
             
            </Header>
            <Content className="content">
                {props.children}
            </Content>
        </MainContent>
    )
}

export default MainContentGeneric