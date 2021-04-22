import React from 'react'

import SidebarGeneric from  '../../Generic/SidebarGeneric'
import MainContentGeneric from  '../../Generic/MainContentGeneric'
import { Container, Cards } from './styles'

import alert from '../../../assets/alert.svg'
import editar from '../../../assets/editar.svg'
import excluir from '../../../assets/excluir.svg'
import left from '../../../assets/left.svg'
import right from '../../../assets/right.svg'

const TagsCMS: React.FC = () => {

    return (
        <>
            <SidebarGeneric></SidebarGeneric>
            <MainContentGeneric>
                <h1>Tags</h1>
                <Container>  
                    <form>
                        <h3>Adicionar tags</h3>
                        <hr/>
                        <label>Nome da tag</label>
                        <input type="text" placeholder="Insira a tag"/>
                        <div className="descricao">
                            <img src={alert} alt=""/>
                            <span>
                                Nome que irá aparecer no fim da publicação. 
                                As tags informam aos leitores sobre o conteúdo 
                                do post. 
                            </span>
                        </div>
                        <button>Salvar</button>
                    </form>
                    <div className="table">
                        <div className="table-header">
                            <h3>Tags</h3>
                            <p>Todos ()</p>
                        </div>
                        <hr/>
                        <form method="get">
                            <input type="text" placeholder="Pesquise aqui!"/>
                        </form>

                        <Cards>
                            <div className="card">
                                <div className="card-header"> 
                                    <div>
                                        <input type="checkbox"/>
                                        <h4>
                                            #Agricultura
                                        </h4>
                                    </div>

                                    <div className="card-options">
                                        <img src={editar} alt="editar"/>    
                                        <img src={excluir} alt="excluir"/>
                                    </div>
                                </div>
                                <ul className="card-body">
                                    <li>NÚMERO DE USO: 2 </li>
                                </ul>
                            </div>
                            <div className="card">
                                <div className="card-header"> 
                                    <div>
                                        <input type="checkbox"/>
                                        <h4>
                                            #Agricultura
                                        </h4>
                                    </div>

                                    <div className="card-options">
                                        <img src={editar} alt="editar"/>    
                                        <img src={excluir} alt="excluir"/>
                                    </div>
                                </div>
                                <ul className="card-body">
                                    <li>NÚMERO DE USO: 2 </li>
                                </ul>
                            </div>
                            <div className="card">
                                <div className="card-header"> 
                                    <div>
                                        <input type="checkbox"/>
                                        <h4>
                                            #Agricultura
                                        </h4>
                                    </div>

                                    <div className="card-options">
                                        <img src={editar} alt="editar"/>    
                                        <img src={excluir} alt="excluir"/>
                                    </div>
                                </div>
                                <ul className="card-body">
                                    <li>NÚMERO DE USO: 2 </li>
                                </ul>
                            </div>
                            <div className="card">
                                <div className="card-header"> 
                                    <div>
                                        <input type="checkbox"/>
                                        <h4>
                                            #Agricultura
                                        </h4>
                                    </div>

                                    <div className="card-options">
                                        <img src={editar} alt="editar"/>    
                                        <img src={excluir} alt="excluir"/>
                                    </div>
                                </div>
                                <ul className="card-body">
                                    <li>NÚMERO DE USO: 2 </li>
                                </ul>
                            </div>
                            <div className="card">
                                <div className="card-header"> 
                                    <div>
                                        <input type="checkbox"/>
                                        <h4>
                                            #Agricultura
                                        </h4>
                                    </div>

                                    <div className="card-options">
                                        <img src={editar} alt="editar"/>    
                                        <img src={excluir} alt="excluir"/>
                                    </div>
                                </div>
                                <ul className="card-body">
                                    <li>NÚMERO DE USO: 2 </li>
                                </ul>
                            </div>
                        </Cards>

                        <table>
                            <thead>
                                <tr>
                                    <td>
                                        <input type="checkbox"/>
                                    </td>
                                    <td>NOME</td>
                                    <td>NÚMERO DE USO</td>
                                    <td>OPÇÕES</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="checkbox"/>
                                    </td>
                                    <td>Agricultura</td>
                                    <td>2</td>
                                    <td>
                                        <img src={editar} alt="editar"/>
                                        <img src={excluir} alt="excluir"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox"/>
                                    </td>
                                    <td>Agricultura</td>
                                    <td>2</td>
                                    <td>
                                        <img src={editar} alt="editar"/>
                                        <img src={excluir} alt="excluir"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox"/>
                                    </td>
                                    <td>Agricultura</td>
                                    <td>2</td>
                                    <td>
                                        <img src={editar} alt="editar"/>
                                        <img src={excluir} alt="excluir"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox"/>
                                    </td>
                                    <td>Agricultura</td>
                                    <td>2</td>
                                    <td>
                                        <img src={editar} alt="editar"/>
                                        <img src={excluir} alt="excluir"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox"/>
                                    </td>
                                    <td>Agricultura</td>
                                    <td>2</td>
                                    <td>
                                        <img src={editar} alt="editar"/>
                                        <img src={excluir} alt="excluir"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox"/>
                                    </td>
                                    <td>Agricultura</td>
                                    <td>2</td>
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
                    </div>
                </Container>
            </MainContentGeneric>
        </>
    )
}

export default TagsCMS
