import React from 'react'

import { Sidebar } from './style'
import toggleMenu from '../../utils/toggleMenu'
import menu from '../../assets/menu.svg'
import inicio from '../../assets/inicio.svg'
import usuarios from '../../assets/usuarios.svg'
import publicacoes from '../../assets/publicacoes.svg'
import configuracoes from '../../assets/configuracoes.svg'

const SidebarGeneric: React.FC = (props) => {
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
                        <div className="main-li active-option">
                            <span className="icon">
                                <img src={inicio} alt="inicio"/>
                            </span>
                            <p>Início</p>
                        </div>
                        
                        <ul className="dropdown">
                            <li>
                                <a href="http://localhost:3000/eco-admin/dashboard">
                                    <p>Dashboard</p>
                                </a> 
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
                                <a href="http://localhost:3000/eco-admin/users">
                                    <p>Todos os usuários</p>
                                </a> 
                            </li>
                            <li>
                                <a href="http://localhost:3000/eco-admin/create-user">
                                    <p>Adicionar usuário</p>
                                </a> 
                            </li>
                            <li>
                                <a href="teste">
                                    <p>Perfil</p>
                                </a> 
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
                                <a href="http://localhost:3000/eco-admin/publications">
                                    <p>Todas as publicações</p>
                                </a> 
                            </li>
                            <li>
                                <a href="teste">
                                    <p>Adicionar publicação</p>
                                </a> 
                            </li>
                            <li>
                                <a href="http://localhost:3000/eco-admin/comments">
                                    <p>Comentários</p>
                                </a> 
                            </li>
                            <li>
                                <a href="http://localhost:3000/eco-admin/categories">
                                    <p>Categorias</p>
                                </a> 
                            </li>
                            <li>
                                <a href="http://localhost:3000/eco-admin/tags">
                                    <p>Tags</p>
                                </a> 
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
    )}

    export default SidebarGeneric