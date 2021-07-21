import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { FiCamera } from 'react-icons/fi'

import { Card, AvatarInput } from './styles'
import api from '../../services/api'
import { useToast } from '../../context/ToastContext'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

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

const ProfileSidebar: React.FC = () => {
    const { addToast } = useToast()
    const { logout } = useAuth()
    const history = useHistory()

    const [avatar, setAvatar] = useState<string>('')
    const [user, setUser] = useState<UserProps>()

    useEffect(() => {
        api.get('/eco-admin/users/profile')
        .then(response => {
            setUser(response.data)
            setAvatar(response.data.avatar)
        })
    }, [])

    const handleAvatarChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
          if (e.target.files) {
            const data = new FormData();
    
            data.append('avatar', e.target.files[0]);
            console.log(data)
            api.patch('/eco-admin/users/avatar', data).then(response => {
              setAvatar(response.data);
    
              addToast({
                type: 'success',
                title: 'Avatar atualizado!',
              });
            });
          }
        }, [addToast] )

        const handleLogout = useCallback(() => {
            logout()
            history.push('/')
        }, [logout, history])
        
    return (
        <Card>
            <div className="top">
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            <div className="info">
                <AvatarInput>
                    <img src={avatar} alt={user?.first_name} />
                    <label htmlFor="avatar">
                    <FiCamera />

                    <input type="file" id="avatar" onChange={handleAvatarChange} />
                    </label>
                </AvatarInput>
                <h3>{user?.first_name}</h3>
                <p>{user?.email}</p>
                <p>{user?.city}/{user?.uf}</p>
            </div>
            <ul>
                <li>
                    <Link to="/profile">Alterar Informações</Link>
                </li>
                <li>
                    <Link to="/profile/doubts">Minhas Dúvidas</Link>
                </li>
                <li>
                    <span onClick={handleLogout}>Sair</span>
                </li>
            </ul>
        </Card>
    )
}

export default ProfileSidebar