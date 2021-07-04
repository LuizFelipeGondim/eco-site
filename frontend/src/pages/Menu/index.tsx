import React from 'react'

import { Header } from './styles'
import hamburguerMenu from '../../utils/hamburguerMenu'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {

    return (
        <>
            <Header>
                <div className="top">
                    <p>Guanambi/BA 28º 18º</p>
                </div>
                <hr/>
                <div className="navbar">
                    <h1>Logo</h1>
                    <ul className="menu">
                        <li>
                            <Link to="/blog">Publicações</Link>
                        </li>
                        <li>
                            <Link to="/quotes">Cotações</Link>
                        </li>
                        <li>
                            <Link to="/weather">Clima</Link>
                        </li>
                        <li>
                            <Link to="/forum">Fórum</Link>
                        </li>
                        <li><button>Entrar</button></li>
                    </ul>
                    <div className="hamburguer" onClick={hamburguerMenu}></div>
                    <button>Entrar</button>
                </div>
            </Header>
        </>
    )
}

export default Home