import React from 'react'

import { Container, Form } from './style'

const LoginDashboard: React.FC = () => {
    return (
        <>
            <Container>
                <Form>
                    <h1>Logo</h1>
                    <label>E-mail</label>
                    <input type="email" name="email" placeholder="example@gmail.com"/>
                    <label>Senha</label>
                    <input type="password" name="password" placeholder="Insira sua senha"/>
                    <button type="submit">Acessar</button>
                </Form>
            </Container>
        </>
    )
}

export default LoginDashboard
