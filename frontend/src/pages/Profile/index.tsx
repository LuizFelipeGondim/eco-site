
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import { Main, Form, Container } from './styles'
import { useToast } from '../../context/ToastContext'
import api from '../../services/api'
import { Input } from '../../components/Input/styles'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import ProfileSidebar from '../../components/ProfileSidebar'

interface IBGEUFResponse {
    sigla: string;
}

interface IBGECityResponse {
    nome: string;
}

const Profile: React.FC = () => {
    const { addToast } = useToast()

    const [selectedUf, setSelectedUf] = useState('0')
    const [selectedCity, setSelectedCity] = useState('0')
    const [whatsapp, setWhatsapp] = useState<string>('')
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')

    const [ufs, setUfs] = useState<string[]>([])
    const [cities, setCities] = useState<string[]>([])

    useEffect(() => {
        api.get('/eco-admin/users/profile')
        .then(response => {
            setSelectedCity(response.data.city)
            setSelectedUf(response.data.uf)
            setWhatsapp(response.data.whatsapp)
            setFirstName(response.data.first_name)
            setLastName(response.data.last_name)
        })
    }, [])

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
        const uf = event.target.value
        setSelectedUf(uf)
    }, [])

    const handleSelectCity = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        const city = event.target.value
        setSelectedCity(city)
    }, [])

    const handleFirstName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setFirstName(value)
    }, [])

    const handleLastName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setLastName(value)
    }, [])

    const handleWhatsapp = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setWhatsapp(value)
    }, [])

    const handleSubmit = useCallback(async () => {
        const data = {
            first_name: firstName,
            last_name: lastName,
            whatsapp: whatsapp,
            city: selectedCity,
            uf: selectedUf
        }

        try {

            await api.post('/eco-admin/users/edit', data)

            addToast({
                type: 'success',
                title: 'Edição Realizada!',
                description: 'Seus dados foram atualizados com sucesso.'
            })
            
        } catch (err) {
            addToast({
                type: 'error',
                title: 'Erro na Edição',
                description: 'Ocorreu um erro ao fazer a edição, tente novamente.'
            })
        }
    }, [
        addToast, 
        selectedCity, 
        selectedUf, 
        firstName, 
        lastName, 
        whatsapp
    ])
    return (
        
        <>
            <Menu></Menu>
            <Main>
                <Container>

                    <ProfileSidebar></ProfileSidebar>
                        
                    <Form onSubmit={handleSubmit}>

                        <div>
                            <h3>Informações Principais</h3>
                            <hr/>
                        </div>

                        <div className="line-1">
                            <div>
                                <Input 
                                    name="first_name" 
                                    value={firstName} 
                                    placeholder="Digite seu nome" 
                                    onChange={handleFirstName}
                                />
                            </div>
                            <div>
                                <Input 
                                    name="last_name" 
                                    value={lastName} 
                                    placeholder="Digite seu sobrenome"
                                    onChange={handleLastName} 
                                />
                            </div>
                        </div>


                        <div className="line-2">
                            <div>
                                <label>Estado</label>
                                <select name="uf" value={selectedUf} onChange={handleSelectUF} >
                                    <option value="0"> Selecione uma UF</option>
                                    {ufs.map(uf => (
                                        <option key={uf} value={uf}> {uf}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label>Cidade</label>
                                <select name="city" value={selectedCity} onChange={handleSelectCity}>
                                    <option value="0"> Selecione uma Cidade</option>
                                    {cities.map(city => (
                                        <option key={city} value={city}> {city}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label>Whatsapp</label>
                                <Input 
                                    name="whatsapp" 
                                    value={whatsapp} 
                                    placeholder="(77) 99999-9999" 
                                    onChange={handleWhatsapp}
                                />
                            </div>
                        </div>
                        
                        <button type="submit"> Editar </button>

                    </Form>
                </Container>
            </Main>
            <Footer></Footer>
        </>
    )
}

export default Profile