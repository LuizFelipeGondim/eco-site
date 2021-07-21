import React from 'react'

import { FooterBox } from './styles'
import author from '../../assets/author.svg'
import facebook from '../../assets/facebook.svg'
import youtube from '../../assets/youtube.svg'
import instagram from '../../assets/instagram.svg'
import { Input } from '../Input/styles'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {

    return (
        <>
            <FooterBox>
                <div className="footer-top">
                    <div className="content">
                        <ul className="links">
                            <h3>Publicações</h3>

                            <li> <Link to="/blog">Últimas notícias</Link></li>
                            <li> <Link to="/blog">Agropecuária</Link> </li>
                            <li> <Link to="/blog">Notícias mais lidas</Link> </li>
                        </ul>

                        <ul className="links">
                            <h3>Cotações</h3>

                            <li> <Link to="/quotes">Algodão</Link> </li>
                            <li> <Link to="/quotes">Carne bovina</Link> </li>
                            <li> <Link to="/quotes">Carne suína</Link> </li>
                            <li> <Link to="/quotes">Trigo</Link> </li>
                            <li> <Link to="/quotes">Soja</Link> </li>
                        </ul>

                        <ul className="links">
                            <h3>Sobre nós</h3>

                            <li> <Link to="example">Quem somos?</Link> </li>
                            <li> <Link to="example">Política de privacidade</Link> </li>
                            <li> <Link to="example">Termos de uso</Link> </li>
                            <li> <Link to="example">Perguntas frequentes</Link> </li>
                            <li> <Link to="example">Entre em contato</Link> </li>
                        </ul>

                        <form method="post">
                            <h2>Newsletter</h2>
                            <label>Informe seu melhor e-mail para receber notícias</label>
                            <Input type="text"/>
                            <button>Cadastrar</button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">

                    <div className="content">

                        <div className="author">
                            <img src={author} alt="autor"/>
                            <h4>Luiz Felipe Gondim</h4>
                        </div>

                        <div className="contact">
                            <div className="social-medias">
                                <img src={facebook} alt="Facebook"/>
                                <img src={youtube} alt="YouTube"/>
                                <img src={instagram} alt="Instagram"/>
                            </div>
                            <h3>Contato</h3>
                            <p>
                                <span> luiz@gmail.com</span>
                            </p>
                        </div>

                    </div>

                </div>
            </FooterBox>
        </>
    )
}

export default Footer