import React from 'react'

import { FooterBox } from './styles'
import author from '../../assets/author.svg'
import facebook from '../../assets/facebook.svg'
import youtube from '../../assets/youtube.svg'
import instagram from '../../assets/instagram.svg'

const Footer: React.FC = () => {

    return (
        <>
            <FooterBox>
                <div className="footer-top">
                    <div className="content">
                        <ul className="links">
                            <h3>Publicações</h3>

                            <li> <a href="example">Últimas notícias</a></li>
                            <li> <a href="example">Agropecuária</a> </li>
                            <li> <a href="example">Notícias mais lidas</a> </li>
                        </ul>

                        <ul className="links">
                            <h3>Receitas</h3>

                            <li> <a href="example">Últímas receitas</a> </li>
                            <li> <a href="example">Receitas mais lidas</a> </li>
                            <li> <a href="example">Receitas do campo</a> </li>
                            <li> <a href="example">Massas</a> </li>
                            <li> <a href="example">Vegetais</a> </li>
                        </ul>

                        <ul className="links">
                            <h3>Cotações</h3>

                            <li> <a href="example">Algodão</a> </li>
                            <li> <a href="example">Carne bovina</a> </li>
                            <li> <a href="example">Carne suína</a> </li>
                            <li> <a href="example">Trigo</a> </li>
                            <li> <a href="example">Soja</a> </li>
                        </ul>

                        <ul className="links">
                            <h3>Sobre nós</h3>

                            <li> <a href="example">Quem somos?</a> </li>
                            <li> <a href="example">Política de privacidade</a> </li>
                            <li> <a href="example">Termos de uso</a> </li>
                            <li> <a href="example">Perguntas frequentes</a> </li>
                            <li> <a href="example">Entre em contato</a> </li>
                        </ul>

                        <form method="post">
                            <h2>Newsletter</h2>
                            <label>Informe seu melhor e-mail para receber notícias</label>
                            <input type="text"/>
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