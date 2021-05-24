import React, { useCallback } from 'react'
import { Formik, Form } from "formik"

import { Content } from './styles'
import { InputField } from '../../components/Input'
import api from '../../services/api'
import { useAuth } from '../../context/AuthContext'
import UserLoginValidations from '../../validations/UserLoginValidations'

import userAvatar from '../../assets/user.svg'
import facebook from '../../assets/facebook.svg'
import youtube from '../../assets/youtube.svg'
import instagram from '../../assets/instagram.svg'

interface LoginFormData {
    email: string
    password: string
}

const Login: React.FC = () => {
    const { user, login } = useAuth()
    console.log(user)

    const handleSubmit = useCallback((data: LoginFormData) => {
        login({
            email: data.email,
            password: data.password
        })
        
    }, [login])

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
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={UserLoginValidations}
                        onSubmit={handleSubmit}

                    >
                        {() => (
                            <Form>
                                <div className="logo">
                                    <img src={userAvatar} alt="Usuário"/>
                                </div>

                                <InputField label="E-mail" type="email" name="email" placeholder="example@gmail.com" />                     
                                
                                <InputField type="password" label="Senha" name="password" placeholder="Digite sua senha"/>


                                <div className="footer">
                                    <a href="http://localhost:3000/login">Esqueci minha senha 🡢</a>
                                    <button type="submit"> Acessar </button>
                                </div>

                            </Form>
                        )}
                    </Formik>
                    
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