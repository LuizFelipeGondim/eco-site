import React, { useState, useEffect, ChangeEvent, useCallback } from 'react'
import axios from 'axios'
import { Formik, Form, Field } from "formik"

import { Content } from './styles'
import { InputField } from '../../components/Input'
import UserRegisterValidations from '../../validations/UserRegisterValidations'
import api from '../../services/api'

import user from '../../assets/user.svg'
import facebook from '../../assets/facebook.svg'
import youtube from '../../assets/youtube.svg'
import instagram from '../../assets/instagram.svg'

interface IBGEUFResponse{
    sigla: string;
}

interface IBGECityResponse{
    nome: string;
}

const Register: React.FC = () => {

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
        if (selectedUf === '0'){
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
        console.log(city)
    }, [])

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
                    <Formik
                        initialValues={{
                            email: '',
                            name: '',
                            last_name: '',
                            password: '',
                            confirm_password: '',
                            uf: '',
                            city: '',
                            whatsapp: ''
                        }}
                        validationSchema={UserRegisterValidations}
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

                                <div className="input-group-2">
                                    <div>
                                        <InputField label="Nome" name="name" placeholder="Digite seu sobrenome"/>
                                    </div>
                                    <div>
                                        <InputField label="Sobrenome" name="last_name" placeholder="Digite seu sobrenome"/>
                                    </div>
                                </div>
                                
                                <div className="input-group-2">
                                    <div>
                                        <InputField type="password" label="Senha" name="password" placeholder="Digite sua senha"/>
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
                                    <InputField name="whatsapp" label="Whatsapp" placeholder="(77) 99999-9999"/>
                                </div>

                                <p>
                                    Ao clicar em Cadrastar-se, eu concordo que li e aceito os 
                                    <a href="example"> Termos de uso </a> e a 
                                    <a href="example"> Política de privacidade </a> .
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

export default Register