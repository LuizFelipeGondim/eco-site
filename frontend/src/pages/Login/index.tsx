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
                        <h1>LOGIN</h1>
                        <p>
                            Não possui uma conta? 
                            <a href="http://localhost:3000/register"> Cadastre-se aqui</a>
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
                        <label>Senha</label>
                        <input type="password" name="password" placeholder="Insira sua senha"/>
                        <div className="footer">
                            <a href="http://localhost:3000/login">Esqueci minha senha 🡢</a>
                            <button type="submit">Acessar</button>
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