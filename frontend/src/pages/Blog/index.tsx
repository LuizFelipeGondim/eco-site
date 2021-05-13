import React from 'react'

import cardImage from '../../assets/imagensRemoviveis/cardImage.svg'
import author from '../../assets/imagensRemoviveis/author.svg'
import Menu from '../Menu'
import Footer from '../Footer'
import { Main, Content, Sidebar } from './styles'

const Blog: React.FC = () => {
    return (
        <>
            <Menu></Menu>
            <Main>  
                <Content>
                    <h1>Blog</h1>

                    <div className="card">
                        <div className="image">
                            <img src={cardImage} alt="Imagem"/>
                        </div>
                        <div className="info">

                            <div className="info-header">
                                <span>Agricultura</span>
                                <p>17 dias atrás</p>
                            </div>

                            <div className="info-content">
                                <h1>Palestra de ecologia</h1>
                                <p>
                                    This is the second part of the SMM starter pack 
                                    series of articles. If you made it this far, 
                                    you must be willing to learn about promoting.
                                </p>
                            </div>

                            <div className="info-footer">

                                <div className="author">
                                    <img src={author} alt="Admin"/>
                                    <p>Admin</p>   
                                </div>

                                <a href="example">Leia mais 🡢</a>

                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={cardImage} alt="Imagem"/>
                        </div>
                        <div className="info">

                            <div className="info-header">
                                <span>Agricultura</span>
                                <p>17 dias atrás</p>
                            </div>

                            <div className="info-content">
                                <h1>Palestra de ecologia</h1>
                                <p>
                                    This is the second part of the SMM starter pack 
                                    series of articles. If you made it this far, 
                                    you must be willing to learn about promoting.
                                </p>
                            </div>

                            <div className="info-footer">

                                <div className="author">
                                    <img src={author} alt="Admin"/>
                                    <p>Admin</p>   
                                </div>

                                <a href="example">Leia mais 🡢</a>

                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={cardImage} alt="Imagem"/>
                        </div>
                        <div className="info">

                            <div className="info-header">
                                <span>Agricultura</span>
                                <p>17 dias atrás</p>
                            </div>

                            <div className="info-content">
                                <h1>Palestra de ecologia</h1>
                                <p>
                                    This is the second part of the SMM starter pack 
                                    series of articles. If you made it this far, 
                                    you must be willing to learn about promoting.
                                </p>
                            </div>

                            <div className="info-footer">

                                <div className="author">
                                    <img src={author} alt="Admin"/>
                                    <p>Admin</p>   
                                </div>

                                <a href="example">Leia mais 🡢</a>

                            </div>
                        </div>
                    </div>

                    <div className="pagination">
                        <button>Carregar mais</button>
                    </div>
                </Content>
                <Sidebar>

                    <form method="get">
                        <input type="text" placeholder="Pesquisar"/>
                    </form>

                    <h3>Últimas publicações</h3>

                    <div className="small-card">

                        <div className="image">
                            <img src={cardImage} alt="Imagem"/>
                        </div>

                        <div className="info">

                            <div className="info-header">
                                <span>Agricultura</span>
                                <p>17 dias atrás</p>
                            </div>

                            <div className="info-content">
                                <h3>Palestra de ecologia</h3>
                            </div>
                            
                        </div>
                    </div>

                    <div className="small-card">

                        <div className="image">
                            <img src={cardImage} alt="Imagem"/>
                        </div>

                        <div className="info">

                            <div className="info-header">
                                <span>Agricultura</span>
                                <p>17 dias atrás</p>
                            </div>

                            <div className="info-content">
                                <h3>Palestra de ecologia</h3>
                            </div>
                            
                        </div>
                    </div>

                    <div className="small-card">

                        <div className="image">
                            <img src={cardImage} alt="Imagem"/>
                        </div>

                        <div className="info">

                            <div className="info-header">
                                <span>Agricultura</span>
                                <p>17 dias atrás</p>
                            </div>

                            <div className="info-content">
                                <h3>Palestra de ecologia</h3>
                            </div>
                            
                        </div>
                    </div>

                </Sidebar>
   
            </Main>
            <Footer></Footer>
        </>
    )
}

export default Blog