import React from 'react'

import { Header } from './styles'
import hamburguerMenu from '../../utils/hamburguerMenu'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
    const user = localStorage.getItem('@Ecoblog:user')
    return (
        <>
            <Header>
                <div className="navbar">
                    <Link to="/">
                        <h1>Ecoblog</h1>
                    </Link>
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
                        {!!user ? 
                            <li>
                                <Link to="/profile">
                                    <button>Perfil</button>
                                </Link>
                            </li>
                            :
                            <li>
                                <Link to="/login">
                                    <button>Entrar</button>
                                </Link>
                            </li>
                        }
                        
                    </ul>
                    <div className="hamburguer" onClick={hamburguerMenu}></div>
                    {!!user ? 

                        <Link to="/profile" className="button-responsive">
                            <button>Perfil</button>
                        </Link>
                        :
                        <Link to="/login" className="button-responsive">
                            <button>Entrar</button>
                        </Link>
               
                    }
                </div>
            </Header>
        </>
    )
}

export default Home