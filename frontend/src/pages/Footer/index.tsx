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

                            <li> <a href="#">Últimas notícias</a></li>
                            <li> <a href="#">Agropecuária</a> </li>
                            <li> <a href="#">Notícias mais lidas</a> </li>
                        </ul>

                        <ul className="links">
                            <h3>Receitas</h3>

                            <li> <a href="#">Últímas receitas</a> </li>
                            <li> <a href="#">Receitas mais lidas</a> </li>
                            <li> <a href="#">Receitas do campo</a> </li>
                            <li> <a href="#">Massas</a> </li>
                            <li> <a href="#">Vegetais</a> </li>
                        </ul>

                        <ul className="links">
                            <h3>Cotações</h3>

                            <li> <a href="#">Algodão</a> </li>
                            <li> <a href="#">Carne bovina</a> </li>
                            <li> <a href="#">Carne suína</a> </li>
                            <li> <a href="#">Trigo</a> </li>
                            <li> <a href="#">Soja</a> </li>
                        </ul>

                        <ul className="links">
                            <h3>Sobre nós</h3>

                            <li> <a href="#">Quem somos?</a> </li>
                            <li> <a href="#">Política de privacidade</a> </li>
                            <li> <a href="#">Termos de uso</a> </li>
                            <li> <a href="#">Perguntas frequentes</a> </li>
                            <li> <a href="#">Entre em contato</a> </li>
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