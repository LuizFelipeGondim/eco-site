import React, { useState, useEffect, ChangeEvent } from 'react'
import axios from 'axios';
import { Form } from '@unform/web'

import { Content } from './styles'
import Input from '../../components/Input'
import api from '../../services/api';

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

    function handleSelectUF(event: ChangeEvent<HTMLSelectElement>){
        const uf = event.target.value;

        setSelectedUf(uf);
    }

    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>){
        const city = event.target.value;

        setSelectedCity(city);
    }
    
    function handleSubmit(data: object): void {

        const uf = selectedUf;
        const city = selectedCity;
        console.log(data, uf, city)
    }
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
                    <Form onSubmit={handleSubmit}>

                        <div className="logo">
                            <img src={user} alt="Usuário"/>
                        </div>

                        <label>E-mail</label>
                        <Input type="email" name="email" placeholder="example@gmail.com"/>

                        <div className="double-input">
                            <div>
                                <label>Nome</label>
                                <Input  name="nome" placeholder="Digite seu nome"/>
                            </div>
                            <div>
                                <label>Sobrenome</label>
                                <Input name="sobrenome" placeholder="Digite seu sobrenome"/>
                            </div>
                        </div>
                        
                        <div className="double-input">
                            <div>
                                <label>Senha</label>
                                <Input type="password" name="password" placeholder="Digite sua senha"/>
                            </div>
                            <div>
                                <label>Confirmar Senha</label>
                                <Input type="password" name="confirm-password" placeholder="Digite sua senha"/>
                            </div>
                        </div>

                        <div className="double-input">
                            <div>
                                <label>Estado</label>
                                <select name="uf" id="uf" value={selectedUf} onChange={handleSelectUF}>
                                    <option value="0"> Selecione uma UF</option>
                                    {ufs.map(uf => (
                                        <option key={uf} value={uf}> {uf}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label>Cidade</label>
                                <select name="city" value={selectedCity} onChange={handleSelectCity} id="city">
                                    <option value="0"> Selecione uma Cidade</option>
                                    {cities.map(city => (
                                        <option key={city} value={city}> {city}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <label>Whatsapp</label>
                        <Input name="whatsapp" placeholder="(77) 99999-9999"/>
                        
                        <p>
                            Ao clicar em Cadrastar-se, eu concordo que li e aceito os 
                            <a href="example"> Termos de uso </a> e a 
                            <a href="example"> Política de privacidade </a> .
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

export default Register