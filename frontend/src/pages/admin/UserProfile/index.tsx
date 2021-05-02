import React from 'react'

import SidebarGeneric from  '../../Generic/SidebarGeneric'
import MainContentGeneric from  '../../Generic/MainContentGeneric'
import { Container, Card, Form } from './styles'
import usuario from '../../../assets/adminSVG/temp.svg'

const ProfileCMS: React.FC = () => {

    return (
        <>
            <SidebarGeneric></SidebarGeneric>
            <MainContentGeneric>
                <h1>Perfil do usuário</h1>
                <Container>  
                    <Card>
                        <div className="top"></div>
                        <div className="info">
                            <img src={usuario} alt=""/>
                            <h3>Luiz Felipe</h3>
                            <p>luizfelipe@gmail.com</p>
                            <p>Guanambi/BA</p>
                        </div>
                        <ul>
                            <li>
                                <strong>20</strong>
                                <span>Receitas</span>  
                            </li>
                            <li>
                                <strong>20</strong>
                                <span>Publicações</span>
                            </li>
                            <li>
                                <strong>20</strong>
                                <span>Comentários</span>
                            </li>
                        </ul>
                    </Card>
                    <Form encType="multipart/form-data">
                        <div>
                            <h3>Editar informações</h3>
                            <hr/>
                        </div>
                        <div className="line-1">
                            <div>
                                <label>Nome</label>
                                <input type="text" value="Luiz Felipe"/>
                            </div>
                            <div>
                                <label>Sobrenome</label>
                                <input type="text" value="Gondim"/>
                            </div>
                        </div>

                        <div className="line-2">
                            <div>
                                <label>Estado</label>
                                <select>
                                    <option>Bahia</option>
                                </select>
                            </div>
                            <div>
                                <label>Cidade</label>
                                <select>
                                    <option>Guanambi</option>
                                </select>
                            </div>
                            <div>
                                <label>Whatsapp</label>
                                <input type="text" value="(77) 99999-9999"/>
                            </div>
                        </div>

                        <div className="line-3">
                            <div>
                                <label>Editar foto de perfil</label>
                                <button>Alterar</button>
                            </div>
                            <div>
                                <input type="checkbox"/>
                                Administrador
                            </div>
                        </div>
                        <button>Salvar</button>
                    </Form>
                </Container>
            </MainContentGeneric>
        </>
    )
}

export default ProfileCMS
