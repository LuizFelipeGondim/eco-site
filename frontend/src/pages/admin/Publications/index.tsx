import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { parseISO, format } from 'date-fns'
import { Link } from 'react-router-dom'

import SidebarGeneric from  '../../../components/CMS/SidebarGeneric'
import MainContentGeneric from  '../../../components/CMS/MainContentGeneric'
import editar from '../../../assets/adminSVG/editar.svg'
import excluir from '../../../assets/adminSVG/excluir.svg'
import left from '../../../assets/adminSVG/left.svg'
import right from '../../../assets/adminSVG/right.svg'
import { Cards, HeaderContent, Table } from './styles'
import usePagination from '../../../context/Pagination/usePagination'
import api from '../../../services/api'
import usePublication from '../../../context/Pagination/usePublications'
import { Input } from '../../../components/Input/styles'

const PublicationsCMS: React.FC = () => {
    
    const [limit, setLimit] = useState(6)
    const { actualPage, handleBeforePage, handleAfterPage } = usePagination()

    const { 
        publications, 
        setPublications,
        fetchPublications, 
        totalPublications,
        publicationsLength,
        setName,
        name,
        users 
    } = usePublication()

    const countAllPublications = publicationsLength === undefined ? 0 : publicationsLength
    const pageLimit = Math.ceil(countAllPublications/limit)

    useEffect(() => {
        fetchPublications(actualPage - 1, limit, name)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [limit, actualPage, name])

    const handleChangeName = useCallback((event) => {
        setName(event.target.value)
    }, [setName])
    
    const handleDeletePublication = useCallback((id: string) => {
        api.delete(`eco-admin/publications/delete/${id}`)

        const data = publications.filter(publication => id !== publication.id)

        setPublications(data)
    }, [setPublications, publications])

    const formatDate = useCallback((date: string) => {
        const [dateFormated, ] = date.split('T')
        const firstDate = parseISO(dateFormated)
        
        return format(
            firstDate,
            "dd'/'MM'/'yyyy",
        )
    }, [])

    function handleLimitChange(event: ChangeEvent<HTMLInputElement>){
        const { value } = event.target

        setLimit(Number(value))
    }
    
    return (
        <>
            <SidebarGeneric></SidebarGeneric>
            <MainContentGeneric>
                <HeaderContent>
                    <div className="top">
                        <h1>Publicações</h1>
                        <div>
                            <Link to="/eco-admin/create-publication">Criar novo</Link>
                        </div>
                    </div>

                    <hr/>

                    <div className="bottom">
                        <form method="get">
                            <Input type="text" placeholder="Pesquise aqui!" onChange={handleChangeName}/>
                        </form>
                    </div>
                </HeaderContent>
                <Table>
                    <div className="info">
                        <div className="results">
                            <p>Todos({totalPublications})</p>
                        </div>

                        <div className="results-per-page">
                            <span>Resultados por página:</span>
                            <Input type="number" value={limit} onChange={handleLimitChange}/>
                        </div>

                    </div>

                    <Cards>

                        {publications.map(publication => {
                            return(
                                <div className="card" key={publication.id}>
                                    <div className="card-header"> 
                                        <div>
                                            <h4>
                                                {users.map(user => 
                                                    user.id === publication.user_id 
                                                    ? user.first_name
                                                    : ''
                                                )}
                                            </h4>
                                        </div>

                                        <div className="card-options">
                                            <Link to={`/eco-admin/edit-publication/${publication.slug}`}>
                                                <img src={editar} alt="editar"/>
                                            </Link>
                                            <span onClick={() => handleDeletePublication(publication.id)}>
                                                <img src={excluir} alt="excluir"/>
                                            </span>    
                                        </div>
                                    </div>
                                    <ul className="card-body">
                                        <li>CRIADO EM: {formatDate(publication.created_at)} </li>
                                        <li>TÍTULO: {publication.title} </li>
                                        <li>
                                            CATEGORIAS: | {publication.categories.map(category => 
                                                <span>{category.category_name} | </span> 
                                            )}
                                        </li>
                                    </ul>
                                </div>  
                            )
                        })}
                        
                    </Cards>


                    <table>
                        <thead>
                            <tr>
                                <td>TÍTULO</td>
                                <td>AUTOR</td>
                                <td>CRIADO EM</td>
                                <td>CATEGORIAS</td>
                                <td>OPÇÕES</td>
                            </tr>
                        </thead>
                        <tbody>
                            {publications.map(publication => {
                                return (
                                    <tr key={publication.id}>
                                        <td>{publication.title}</td>
                                        <td>{users.map(user => 
                                                user.id === publication.user_id 
                                                ? user.first_name
                                                : ''
                                            )}
                                        </td>
                                        <td>{formatDate(publication.created_at)}</td>
                                        <td>| {publication.categories.map(category => 
                                                <span>{category.category_name} | </span> 
                                            )} 
                                        </td>
                                        <td>
                                            <Link to={`/eco-admin/edit-publication/${publication.slug}`}>
                                                <img src={editar} alt="editar"/>
                                            </Link>
                                            <span onClick={() => handleDeletePublication(publication.id)}>
                                                <img src={excluir} alt="excluir"/>
                                            </span>
                                        </td>
                                    </tr>
                                )})}
                        </tbody>
                    </table>
                    <div className="table-footer">
                        <div>
                            <button onClick={handleBeforePage}>
                                <img src={left} alt=""/>
                            </button>
                            <p>Anterior</p>
                            <p> {actualPage} de {pageLimit} </p>
                            <p>Próximo</p>
                            <button onClick={() => handleAfterPage(pageLimit)}>
                                <img src={right} alt=""/>    
                            </button>
                        </div>
                    </div>
                </Table>
            </MainContentGeneric>
        </>
    )
}

export default PublicationsCMS
