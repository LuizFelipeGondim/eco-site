import React from 'react'

import SidebarGeneric from  '../../Generic/SidebarGeneric'
import MainContentGeneric from  '../../Generic/MainContentGeneric'
import { Form } from './styles'

const CreateUserCMS: React.FC = () => {

    return (
        <>
            <SidebarGeneric></SidebarGeneric>
            <MainContentGeneric>
                <h1>Adicionar usuário</h1> 
                    <Form encType="multipart/form-data">
                        <div>
                            <h3>Informações Principais</h3>
                            <hr/>
                        </div>
                        <div className="line-1">
                            <div>
                                <label>Nome</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Sobrenome</label>
                                <input type="text" />
                            </div>
                        </div>

                        <div className="line-1">
                            <div>
                                <label>E-mail</label>
                                <input type="email" />
                            </div>
                            <div>
                                <label>Senha</label>
                                <input type="password" />
                            </div>
                        </div>

                        <div className="line-1">
                            <div>
                                <input type="checkbox"/>
                                Administrador
                            </div>
                            <div>
                                <label>Confirmar Senha</label>
                                <input type="password"/>
                            </div>
                        </div>

                        <div>
                            <h3>Informações de Contato</h3>
                            <hr/>
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
                            
                        </div>
                        <button>Salvar</button>
                    </Form>
            </MainContentGeneric>
        </>
    )
}

export default CreateUserCMS
