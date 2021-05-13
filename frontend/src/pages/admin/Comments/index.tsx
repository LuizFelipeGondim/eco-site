import React from 'react'

import SidebarGeneric from  '../../../components/CMS/SidebarGeneric'
import MainContentGeneric from  '../../../components/CMS/MainContentGeneric'
import editar from '../../../assets/adminSVG/editar.svg'
import excluir from '../../../assets/adminSVG/excluir.svg'
import left from '../../../assets/adminSVG/left.svg'
import right from '../../../assets/adminSVG/right.svg'
import { Cards, HeaderContent, Table } from './styles'

const UsersCMS: React.FC = () => {

    return (
        <>
            <SidebarGeneric></SidebarGeneric>
            <MainContentGeneric>
                <HeaderContent>
                    <div className="top">
                        <h1>Comentários</h1>
                        <div>
                            <select name="" id="">
                                <option value="">PDF</option>
                                <option value="">TXT</option>
                            </select>
                            <button>Criar novo</button>
                        </div>
                    </div>

                    <hr/>

                    <div className="bottom">
                        <form method="get">
                            <input type="text" placeholder="Pesquise aqui!"/>
                        </form>
                        <div className="filter">
                            <select name="" id="">
                                <option value="">Data de criação</option>
                            </select>
                            <select name="" id="">
                                <option value="">Estado</option>
                            </select>
                            <select name="" id="">
                                <option value="">Cidade</option>
                            </select>
                            <select name="" id="">
                                <option value="">Status</option>
                            </select>
                        </div>
                    </div>
                </HeaderContent>
                <Table>
                    <div className="info">
                        <div className="results">
                            <p>Todos()</p>
                            <p>Administradores()</p>
                            <p>Comuns()</p>
                        </div>

                        <div className="results-per-page">
                            <span>Resultados por página:</span>
                            <input type="number"/>
                        </div>

                    </div>

                    <Cards>
                        <div className="card">
                            <div className="card-header">
                                
                                <div>
                                    <input type="checkbox"/>
                                    <h4>
                                        Luiz Felipe
                                    </h4>
                                </div>

                                <div className="card-options">
                                    <img src={editar} alt="editar"/>    
                                    <img src={excluir} alt="excluir"/>
                                </div>
                            </div>
                            <ul className="card-body">
                                <li>CRIADO EM: 15 Maio 2021 </li>
                                <li>COMENTÁRIO: Lorem ipsum dolor sit amet, c... </li>
                                <li>PUBLICAÇÃO: Erosão do solo</li>
                                <li>ESTADO: Ativo</li>
                                <li>DENÚNCIAS: 1</li>
                            </ul>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                
                                <div>
                                    <input type="checkbox"/>
                                    <h4>
                                        Luiz Felipe
                                    </h4>
                                </div>

                                <div className="card-options">
                                    <img src={editar} alt="editar"/>    
                                    <img src={excluir} alt="excluir"/>
                                </div>
                            </div>
                            <ul className="card-body">
                                <li>CRIADO EM: 15 Maio 2021 </li>
                                <li>COMENTÁRIO: Lorem ipsum dolor sit amet, c... </li>
                                <li>PUBLICAÇÃO: Erosão do solo</li>
                                <li>ESTADO: Ativo</li>
                                <li>DENÚNCIAS: 1</li>
                            </ul>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                
                                <div>
                                    <input type="checkbox"/>
                                    <h4>
                                        Luiz Felipe
                                    </h4>
                                </div>

                                <div className="card-options">
                                    <img src={editar} alt="editar"/>    
                                    <img src={excluir} alt="excluir"/>
                                </div>
                            </div>
                            <ul className="card-body">
                                <li>CRIADO EM: 15 Maio 2021 </li>
                                <li>COMENTÁRIO: Lorem ipsum dolor sit amet, c... </li>
                                <li>PUBLICAÇÃO: Erosão do solo</li>
                                <li>ESTADO: Ativo</li>
                                <li>DENÚNCIAS: 1</li>
                            </ul>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                
                                <div>
                                    <input type="checkbox"/>
                                    <h4>
                                        Luiz Felipe
                                    </h4>
                                </div>

                                <div className="card-options">
                                    <img src={editar} alt="editar"/>    
                                    <img src={excluir} alt="excluir"/>
                                </div>
                            </div>
                            <ul className="card-body">
                                <li>CRIADO EM: 15 Maio 2021 </li>
                                <li>COMENTÁRIO: Lorem ipsum dolor sit amet, c... </li>
                                <li>PUBLICAÇÃO: Erosão do solo</li>
                                <li>ESTADO: Ativo</li>
                                <li>DENÚNCIAS: 1</li>
                            </ul>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                
                                <div>
                                    <input type="checkbox"/>
                                    <h4>
                                        Luiz Felipe
                                    </h4>
                                </div>

                                <div className="card-options">
                                    <img src={editar} alt="editar"/>    
                                    <img src={excluir} alt="excluir"/>
                                </div>
                            </div>
                            <ul className="card-body">
                                <li>CRIADO EM: 15 Maio 2021 </li>
                                <li>COMENTÁRIO: Lorem ipsum dolor sit amet, c... </li>
                                <li>PUBLICAÇÃO: Erosão do solo</li>
                                <li>ESTADO: Ativo</li>
                                <li>DENÚNCIAS: 1</li>
                            </ul>
                        </div>
                    </Cards>

                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <input type="checkbox"/>
                                </td>
                                <td>USUÁRIO</td>
                                <td>CRIADO EM</td>
                                <td>COMENTÁRIO</td>
                                <td>PUBLICAÇÃO</td>
                                <td>ESTADO</td>
                                <td>DENÚNCIAS</td>
                                <td>OPÇÕES</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="checkbox"/>
                                </td>
                                <td>Luiz Felipe</td>
                                <td>15 de maio</td>
                                <td>Lorem ipsum dolor sit amet, c...</td>
                                <td>Erosão do solo</td>
                                <td>Inativo</td>
                                <td>1</td>
                                <td>
                                    <img src={editar} alt="editar"/>
                                    <img src={excluir} alt="excluir"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox"/>
                                </td>
                                <td>Luiz Felipe</td>
                                <td>15 de maio</td>
                                <td>Lorem ipsum dolor sit amet, c...</td>
                                <td>Erosão do solo</td>
                                <td>Inativo</td>
                                <td>1</td>
                                <td>
                                    <img src={editar} alt="editar"/>
                                    <img src={excluir} alt="excluir"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox"/>
                                </td>
                                <td>Luiz Felipe</td>
                                <td>15 de maio</td>
                                <td>Lorem ipsum dolor sit amet, c...</td>
                                <td>Erosão do solo</td>
                                <td>Inativo</td>
                                <td>1</td>
                                <td>
                                    <img src={editar} alt="editar"/>
                                    <img src={excluir} alt="excluir"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox"/>
                                </td>
                                <td>Luiz Felipe</td>
                                <td>15 de maio</td>
                                <td>Lorem ipsum dolor sit amet, c...</td>
                                <td>Erosão do solo</td>
                                <td>Inativo</td>
                                <td>1</td>
                                <td>
                                    <img src={editar} alt="editar"/>
                                    <img src={excluir} alt="excluir"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox"/>
                                </td>
                                <td>Luiz Felipe</td>
                                <td>15 de maio</td>
                                <td>Lorem ipsum dolor sit amet, c...</td>
                                <td>Erosão do solo</td>
                                <td>Inativo</td>
                                <td>1</td>
                                <td>
                                    <img src={editar} alt="editar"/>
                                    <img src={excluir} alt="excluir"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="table-footer">
                        <div>
                            <button>
                                <img src={left} alt=""/>
                            </button>
                            <p>Anterior</p>
                            <p> 1 de 9 </p>
                            <p>Próximo</p>
                            <button>
                                <img src={right} alt=""/>    
                            </button>
                        </div>
                        <button>Excluir marcados</button>
                    </div>
                </Table>
            </MainContentGeneric>
        </>
    )
}

export default UsersCMS
