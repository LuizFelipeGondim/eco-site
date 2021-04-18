import React from 'react'

import { MainContent, Header, Content } from './style'
import temp from '../../assets/temp.svg'
import logout from '../../assets/logout.svg'

const MainContentGeneric: React.FC = (props) => {
    console.log(props)
    return (

        <MainContent className="main-content">
                <Header className="header">
                    
                    <img src={temp} alt=""/>
                    <p>Luiz Felipe</p>
                    <hr/>
                    <a href="teste">
                        <img src={logout} alt=""/>
                    </a>
            
                </Header>
                <Content className="content">
                    {props.children}
                </Content>
            </MainContent> 
    )}

    export default MainContentGeneric