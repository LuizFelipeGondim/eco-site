import React, { useState, useEffect, ChangeEvent, useCallback } from 'react'
import axios from 'axios'
import { Formik, Form, Field } from "formik"
import { Link, useHistory } from 'react-router-dom'

import { Content } from './styles'
import { InputField } from '../../components/Input'
import UserRegisterValidations from '../../validations/UserRegisterValidations'
import api from '../../services/api'
import { useToast } from '../../context/ToastContext'

import user from '../../assets/user.svg'
import facebook from '../../assets/facebook.svg'
import youtube from '../../assets/youtube.svg'
import instagram from '../../assets/instagram.svg'

interface IBGEUFResponse {
    sigla: string;
}

interface IBGECityResponse {
    nome: string;
}

interface RegisterFormData {
    email: string
    first_name: string
    last_name: string
    password: string
    uf: string
    city: string
    whatsapp: string
}

const Register: React.FC = () => {
    const { addToast } = useToast()
    const history = useHistory()

    const [selectedUf, setSelectedUf] = useState('0')
    const [selectedCity, setSelectedCity] = useState('0')

    const [ufs, setUfs] = useState<string[]>([])
    const [cities, setCities] = useState<string[]>([])

    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
            const ufInitials = response.data.map(uf => uf.sigla)
            setUfs(ufInitials)
        })
    }, [])

    useEffect(() => {
        if (selectedUf === '0') {
            return
        }

        axios
            .get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
            .then(response => {
                const cityNames = response.data.map(city => city.nome)
                setCities(cityNames)
                
            });

    }, [selectedUf])

    const handleSelectUF = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        const uf = event.target.value;

        setSelectedUf(uf);
    }, [])

    const handleSelectCity = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        const city = event.target.value;
        setSelectedCity(city);
    }, [])

    const handleSubmit = useCallback(async (data: RegisterFormData) => {

        try {
            await api.post('/users', data)

            history.push('/login')

            addToast({
                type: 'success',
                title: 'Cadastro Realizado!',
                description: 'Você já pode fazer seu login na plataforma'
            })

        } catch (err) {
            addToast({
                type: 'error',
                title: 'Erro no cadastro!',
                description: 'Ocorreu um erro ao fazer cadastro, tente novamente.'
            })
        }
    }, [addToast, history])
    return (
        <>
            <Content>
                <header>
                    <div>
                        <h1>CADASTRO</h1>
                        <p>
                            Já possui uma conta?
                            <Link to="/login"> Clique aqui</Link>
                        </p>
                    </div>
                </header>
                <main>
                    <Formik
                        initialValues={{
                            email: '',
                            first_name: '',
                            last_name: '',
                            password: '',
                            confirm_password: '',
                            uf: '',
                            city: '',
                            whatsapp: ''
                        }}
                        validationSchema={UserRegisterValidations}
                        onSubmit={handleSubmit}
                    >
                        {() => (
                            <Form>
                                <div className="logo">
                                    <img src={user} alt="Usuário" />
                                </div>

                                <InputField label="E-mail" type="email" name="email" placeholder="example@gmail.com" />

                                <div className="input-group-2">
                                    <div>
                                        <InputField label="Nome" name="first_name" placeholder="Digite seu nome" />
                                    </div>
                                    <div>
                                        <InputField label="Sobrenome" name="last_name" placeholder="Digite seu sobrenome" />
                                    </div>
                                </div>

                                <div className="input-group-2">
                                    <div>
                                        <InputField type="password" label="Senha" name="password" placeholder="Digite sua senha" />
                                    </div>
                                    <div>
                                        <InputField type="password" label="Confirmar Senha" name="confirm_password" placeholder="Digite sua senha" />
                                    </div>
                                </div>

                                <div className="input-group-2">
                                    <div>
                                        <label>Estado</label>
                                        <Field as="select" name="uf" value={selectedUf} onChange={handleSelectUF} >
                                            <option value="0"> Selecione uma UF</option>
                                            {ufs.map(uf => (
                                                <option key={uf} value={uf}> {uf}</option>
                                            ))}
                                        </Field>
                                    </div>
                                    <div>
                                        <label>Cidade</label>
                                        <Field as="select" name="city" value={selectedCity} onChange={handleSelectCity}>
                                            <option value="0"> Selecione uma Cidade</option>
                                            {cities.map(city => (
                                                <option key={city} value={city}> {city}</option>
                                            ))}
                                        </Field>
                                    </div>
                                </div>
                                <div className="input-group-1">
                                    <InputField name="whatsapp" label="Whatsapp" placeholder="(77) 99999-9999" />
                                </div>

                                <p>
                                    Ao clicar em Cadrastar-se, eu concordo que li e aceito os
                                    <Link to="/example"> Termos de uso </Link> e a
                                    <Link to="/example"> Política de privacidade </Link> .
                                </p>

                                <div className="footer">
                                    <button type="submit"> Cadastrar-se </button>
                                </div>

                            </Form>
                        )}
                    </Formik>

                </main>

                <footer>
                    <span>© 2020 Ecoblog</span>
                    <div className="social-medias">
                        <img src={facebook} alt="Facebook" />
                        <img src={youtube} alt="Youtube" />
                        <img src={instagram} alt="Instagram" />
                    </div>
                    <ul>
                        <li>
                            <Link to="/register">Termos de uso</Link>
                        </li>
                        <li>
                            <Link to="/register">Políticas de privacidade</Link>
                        </li>
                        <li>
                            <Link to="/register">Entre em contato</Link>
                        </li>
                    </ul>
                </footer>
            </Content>
        </>
    )
}

export default Register