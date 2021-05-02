import React from 'react'

import { Content, Form } from './styles'

import user from '../../assets/user.svg'
import facebook from '../../assets/facebook.svg'
import youtube from '../../assets/youtube.svg'
import instagram from '../../assets/instagram.svg'


const Login: React.FC = (props) => {

    return (
        <>
            <Content>
                <header>
                    <div>
                        <h1>CADASTRO</h1>
                        <p>
                            Já possui uma conta? 
                            <a href="http://localhost:3000/login"> Clique aqui</a>
                        </p>
                    </div>
                </header>
                <main>
                    <Form>

                        <div className="logo">
                            <img src={user} alt="Usuário"/>
                        </div>

                        <label>E-mail</label>
                        <input type="email" name="email" placeholder="example@gmail.com"/>

                        <div className="double-input">
                            <div>
                                <label>Nome</label>
                                <input  name="nome" placeholder="Digite seu nome"/>
                            </div>
                            <div>
                                <label>Sobrenome</label>
                                <input name="sobrenome" placeholder="Digite seu sobrenome"/>
                            </div>
                        </div>
                        
                        <div className="double-input">
                            <div>
                                <label>Senha</label>
                                <input type="password" name="password" placeholder="Digite sua senha"/>
                            </div>
                            <div>
                                <label>Confirmar Senha</label>
                                <input type="password" name="confirm-password" placeholder="Digite sua senha"/>
                            </div>
                        </div>

                        <div className="double-input">
                            <div>
                                <label>Estado</label>
                                <select name="estado" placeholder="Selecione seu estado">
                                    <option>Bahia</option>
                                </select>
                            </div>
                            <div>
                                <label>Cidade</label>
                                <select name="cidade" placeholder="Selecione sua cidade">
                                    <option>Guanambi</option>
                                </select>
                            </div>
                        </div>

                        <label>Whatsapp</label>
                        <input name="whatsapp" placeholder="(77) 99999-9999"/>
                        
                        <p>
                            Ao clicar em Cadrastar-se, eu concordo que li e aceito os 
                            <a href=""> Termos de uso </a> e a 
                            <a href=""> Política de privacidade </a> .
                        </p>

                        <div className="footer">
                            <button type="submit"> Cadastrar-se </button>
                        </div>
                    </Form>
                </main>
                <footer>
                    <span>© 2020 Ecoblog</span>
                    <div className="social-medias">
                        <img src={facebook} alt="Facebook"/>
                        <img src={youtube} alt="Youtube"/>
                        <img src={instagram} alt="Instagram"/>
                    </div>
                    <ul>
                        <li>
                            <a href="http://localhost:3000/login">Termos de uso</a>  
                        </li>
                        <li>
                            <a href="http://localhost:3000/login">Políticas de privacidade</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/login">Entre em contato</a>
                        </li>
                    </ul>
                </footer>
            </Content>
        </>
    )}

export default Login