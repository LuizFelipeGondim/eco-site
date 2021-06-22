import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import SidebarGeneric from  '../../../components/CMS/SidebarGeneric'
import MainContentGeneric from  '../../../components/CMS/MainContentGeneric'
import { FormContainer } from './styles'
import api from '../../../services/api'
import { useToast } from '../../../context/ToastContext'
import { Field, Form, Formik } from 'formik'
import { InputField } from '../../../components/Input'
import UserRegisterValidations from '../../../validations/UserRegisterValidations'

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
    is_staff: boolean
}

const CreateUserCMS: React.FC = () => {
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
        const dataForm = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
            whatsapp: data.whatsapp,
            is_staff: data.is_staff,
            city: selectedCity,
            uf: selectedUf
        }

        try {
            await api.post('/eco-admin/users', dataForm)
            addToast({
                type: 'success',
                title: 'Cadastro Realizado!',
                description: 'Você já pode fazer seu login na plataforma'
            })
            
            history.push('/eco-admin/users')
            
        } catch (err) {
            addToast({
                type: 'error',
                title: 'Erro no cadastro!',
                description: 'Ocorreu um erro ao fazer cadastro, tente novamente.'
            })
        }
    }, [addToast, history, selectedCity, selectedUf])

    return (
        <>
            <SidebarGeneric></SidebarGeneric>
            <MainContentGeneric>
                <h1>Adicionar usuário</h1> 
                <FormContainer>
                <Formik
                    initialValues={{
                        email: '',
                        first_name: '',
                        last_name: '',
                        password: '',
                        confirm_password: '',
                        uf: '',
                        city: '',
                        whatsapp: '',
                        is_staff: false
                    }}
                    validationSchema={UserRegisterValidations}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form>

                            <div>
                                <h3>Informações Principais</h3>
                                <hr/>
                            </div>

                            <div className="line-1">
                                <div>
                                    <InputField label="Nome" name="first_name" placeholder="Digite seu nome" />
                                </div>
                                <div>
                                    <InputField label="Sobrenome" name="last_name" placeholder="Digite seu sobrenome" />
                                </div>
                            </div>
                            <div className="line-1">
                                <div>
                                    <InputField label="E-mail" type="email" name="email" placeholder="example@gmail.com" />
                                </div>
                                <div>
                                    <InputField type="password" label="Senha" name="password" placeholder="Digite sua senha" />
                                </div>
                            </div>

                            <div className="line-1">
                                <div>
                                    <InputField type="checkbox" label="Administrador" name="is_staff" />
                                </div>
                                <div>
                                    <InputField type="password" label="Confirmar Senha" name="confirm_password" placeholder="Digite sua senha" />
                                </div>
                            </div>

                            <div>
                                <h3>Informações de Contato</h3>
                                <hr/>
                            </div>

                            <div className="line-2">
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
                                <div>
                                    <InputField name="whatsapp" label="Whatsapp" placeholder="(77) 99999-9999" />
                                </div>
                            </div>

                            
                                <button type="submit"> Adicionar </button>

                        </Form>
                    )}
                </Formik>
                </FormContainer>    
            </MainContentGeneric>
        </>
    )
}

export default CreateUserCMS
