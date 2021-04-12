import React from 'react'

import { Sidebar, MainContent, Header, Content } from './style'
import menu from '../../assets/menu.svg'
import inicio from '../../assets/inicio.svg'
import usuarios from '../../assets/usuarios.svg'
import publicacoes from '../../assets/publicacoes.svg'
import temp from '../../assets/temp.svg'
import logout from '../../assets/logout.svg'

const Dashboard: React.FC = () => {
    return (
        <>
            <Sidebar>
                <div className="sidebar-header">
                    <h1>Ecoblog</h1>
                    <img src={menu} alt="menu"/>
                </div>
                <div className="sidebar-menu">
                    <ul>
                        <li className="active">
                            <a href="">
                                <img src={inicio} alt="inicio"/>
                                <p>Início</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={usuarios} alt="usuarios"/>
                                <p>Usuários</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={publicacoes} alt="publicacoes"/>
                                <p>Publicações</p>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="">
                                <img src={publicacoes} alt="publicacoes"/>
                                <p>Configurações</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </Sidebar> 
            <MainContent>
                <Header>
                    <img src={temp} alt=""/>
                    <p>Luiz Felipe</p>
                    <hr/>
                    <a href="teste">
                        <img src={logout} alt=""/>
                    </a>
                </Header>
                <Content>
                </Content>
            </MainContent>
        </>
    )
}

export default Dashboard
