import React from 'react'

import SidebarGeneric from  '../../Generic/SidebarGeneric'
import MainContentGeneric from  '../../Generic/MainContentGeneric'
import { Container } from './styles'

import alert from '../../../assets/alert.svg'
import editar from '../../../assets/editar.svg'
import excluir from '../../../assets/excluir.svg'
import left from '../../../assets/left.svg'
import right from '../../../assets/right.svg'

const CategoriesCMS: React.FC = () => {

    return (
        <>
            <SidebarGeneric></SidebarGeneric>
            <MainContentGeneric>
                <h1>Categorias</h1>
                <Container>  
                    <form>
                        <h3>Adicionar categorias</h3>
                        <hr/>
                        <label htmlFor="category">Nome da categoria</label>
                        <input type="text" placeholder="Insira a categoria"/>
                        <div className="descricao">
                            <img src={alert} alt=""/>
                            <span>Nome que irá aparecer junto com a publicação.</span>
                        </div>

                        <label htmlFor="category">Slug</label>
                        <input type="text" placeholder="Insira o slug"/>
                        <div className="descricao">
                            <img src={alert} alt=""/>
                            <span>
                                O “slug” é uma versão amigável da URL. Normalmente, é 
                                toda em letras minúsculas e contém apenas letras, números 
                                e hífens no lugar dos espaços vazios.
                            </span>
                        </div>

                        <button>Salvar</button>
                    </form>
                    <div className="table">
                        <div className="table-header">
                            <h3>Categorias</h3>
                            <p>Todos ()</p>
                        </div>
                        <hr/>
                        <form method="get">
                            <input type="text" placeholder="Pesquise aqui!"/>
                        </form>
                        <table>
                            <thead>
                                <tr>
                                    <td>
                                        <input type="checkbox"/>
                                    </td>
                                    <td>NOME</td>
                                    <td>SLUG</td>
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
                                    <td>agricultura-familiar</td>
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
                                    <td>agricultura-familiar</td>
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
                                    <td>agricultura-familiar</td>
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
                                    <td>agricultura-familiar</td>
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
                                    <td>agricultura-familiar</td>
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

export default CategoriesCMS
