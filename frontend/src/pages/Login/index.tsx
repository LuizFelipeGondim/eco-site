import React from 'react'
import { Formik, Form} from "formik"
import * as Yup from 'yup'

import { Content } from './styles'
import { InputField } from '../../components/Input'
import api from '../../services/api'

import user from '../../assets/user.svg'
import facebook from '../../assets/facebook.svg'
import youtube from '../../assets/youtube.svg'
import instagram from '../../assets/instagram.svg'


const Login: React.FC = () => {
    const UserLoginValidations = Yup.object().shape({
    
        email: Yup.string()
            .required('O e-mail é obrigatório')
            .email('Digite um e-mail válido'),
    
        password: Yup.string()
            .min(8, 'No mínimo 8 dígitos'),
    })
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
                        onSubmit={values => {
                            console.log(values);
                        }}
                    >
                        {() => (
                            <Form>
                                <div className="logo">
                                    <img src={user} alt="Usuário"/>
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