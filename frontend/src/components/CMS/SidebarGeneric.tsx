import React from 'react'

import { Sidebar } from './styles'
import toggleMenu from '../../utils/toggleMenu'
import menu from '../../assets/adminSVG/menu.svg'
import inicio from '../../assets/adminSVG/inicio.svg'
import usuarios from '../../assets/adminSVG/usuarios.svg'
import publicacoes from '../../assets/adminSVG/publicacoes.svg'
import configuracoes from '../../assets/adminSVG/configuracoes.svg'
import { Link } from 'react-router-dom'


const SidebarGeneric: React.FC = () => {
    
    return (

        <Sidebar className="sidebar">
            <div className="sidebar-header">
                <h1>Ecoblog</h1>
                <div className="activator-menu">
                    <img src={menu} className="toggle" alt="menu" onClick={toggleMenu}/>
                </div>
            </div>
            <div className="sidebar-menu">
                <ul>
                    <li>
                        <div className="main-li">
                            <span className="icon">
                                <img src={inicio} alt="inicio"/>
                            </span>
                            <p>Início</p>
                        </div>
                        
                        <ul className="dropdown">
                            <li>
                                <Link to="/eco-admin">
                                    <p>Perfil do usuário</p>
                                </Link> 
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className="main-li">
                            <span className="icon">
                                <img src={usuarios} alt="usuarios"/>
                            </span>
                            <p>Usuários</p>
                        </div>
                        
                        <ul className="dropdown">
                            <li>
                                <Link to="/eco-admin/users">
                                    <p>Todos os usuários</p>
                                </Link> 
                            </li>
                            <li>
                                <Link to="/eco-admin/create-user">
                                    <p>Adicionar usuário</p>
                                </Link> 
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className="main-li">
                            <span className="icon">
                                <img src={publicacoes} alt="publicacoes"/>
                            </span>
                            <p>Publicações</p>
                        </div>
                        
                        <ul className="dropdown">
                            <li>
                                <Link to="/eco-admin/publications">
                                    <p>Todas as publicações</p>
                                </Link> 
                            </li>
                            <li>
                                <Link to="/eco-admin/create-publication">
                                    <p>Adicionar publicação</p>
                                </Link> 
                            </li>
                            <li>
                                <Link to="/eco-admin/categories">
                                    <p>Categorias</p>
                                </Link> 
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="teste" className="main-li">
                            <span className="icon">
                                <img src={configuracoes} alt="configuracoes"/>
                            </span>
                            <p>Configurações</p>
                        </a>
                    </li>
                </ul>
            </div>
        </Sidebar> 
    )
}

export default SidebarGeneric