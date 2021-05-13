import React from 'react'
import { Form } from '@unform/web'

import Input from '../../../components/Input'
import { Container } from './styles'

const LoginDashboard: React.FC = () => {
    function handleSubmit(data: object): void {
        console.log(data)
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1>Logo</h1>
                <label>E-mail</label>
                <Input type="email" name="email" placeholder="example@gmail.com" />
                <label>Senha</label>
                <Input type="password" name="password" placeholder="Insira sua senha" />
                <button type="submit">Acessar</button>
            </Form>
        </Container>
    )
}

export default LoginDashboard
