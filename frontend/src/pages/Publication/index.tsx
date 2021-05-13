import React from 'react'

import Menu from '../Menu'
import Footer from '../Footer'
import { Main, Banner, Content } from './styles'

const Publication: React.FC = () => {
 
    return (
        <>
            <Menu/>
            <Main>
                <Banner src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.h5pIpzFChWDBifI0DvK8sQHaE8%26pid%3DApi&f=1" />
                <div className="overlay"></div>
                <div className="banner-content"></div>    
                <Content>

                </Content>
            </Main>
            <Footer></Footer>
        </>
    )
}

export default Publication