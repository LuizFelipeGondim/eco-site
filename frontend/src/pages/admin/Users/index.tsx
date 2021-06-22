import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { parseISO, format } from 'date-fns'

import SidebarGeneric from  '../../../components/CMS/SidebarGeneric'
import MainContentGeneric from  '../../../components/CMS/MainContentGeneric'
import { HeaderContent, Table, Cards } from './styles'
import { Input } from '../../../components/Input/styles'
import usePagination from '../../../context/Pagination/usePagination'
import useUsers from '../../../context/Pagination/useUsers'

import right from '../../../assets/adminSVG/right.svg'
import left from '../../../assets/adminSVG/left.svg'
import { Link } from 'react-router-dom'


const UsersCMS: React.FC = () => {
    const [limit, setLimit] = useState(6)
    const { actualPage, handleBeforePage, handleAfterPage } = usePagination()

    const { 
        fetchUsers, 
        totalUsers,
        usersLength,
        setName,
        name,
        users 
    } = useUsers()

    const countAllUsers = usersLength === undefined ? 0 : usersLength
    const pageLimit = Math.ceil(countAllUsers/limit)

    useEffect(() => {
        fetchUsers(actualPage - 1, limit, name)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [limit, actualPage, name])

    const handleChangeName = useCallback((event) => {
        setName(event.target.value)
    }, [setName])

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
                        <h1>Usuários</h1>
                        <div>
                            <Link to="/eco-admin/create-user">Criar novo</Link>
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
                            <p>Todos({totalUsers})</p>
                        </div>

                        <div className="results-per-page">
                            <span>Resultados por página:</span>
                            <Input type="number" value={limit} onChange={handleLimitChange}/>
                        </div>

                    </div>

                    <Cards>
                        {users.map(user => {
                            return (
                                <div className="card" key={user.id}>
                                    <div className="card-header">
                                        
                                        <div>
                                            <h4>
                                                {user.first_name}
                                                <span> 
                                                    {user.is_staff ? ' - Admin' : ' - Comum' }
                                                </span>
                                            </h4>
                                        </div>
                                    </div>
                                    <ul className="card-body">
                                        <li>CRIADO EM: {formatDate(user.created_at)} </li>
                                        <li>E-MAIL: {user.email} </li>
                                        <li>ENDEREÇO: {user.city}/{user.uf}</li>
                                        <li>WHATSAPP: {user.whatsapp}</li>
                                    </ul>
                                </div>
                            )
                        })}
                        
                    </Cards>
                    
                    <table>
                        <thead>
                            <tr>
                                <td>USUÁRIO</td>
                                <td>CRIADO EM</td>
                                <td>E-MAIL</td>
                                <td>ENDEREÇO</td>
                                <td>WHATSAPP</td>
                                <td>STATUS</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => {
                                return (
                                    <tr key={user.id}>
                                        <td className="avatar">
                                            <img className="img-avatar" src={user.avatar} alt=""/>
                                            <p>{user.first_name}</p> 
                                        </td>
                                        <td>{formatDate(user.created_at)}</td>
                                        <td>{user.email}</td>
                                        <td>{user.city}/{user.uf}</td>
                                        <td>{user.whatsapp}</td>
                                        <td>{user.is_staff ? 'Admin' : 'Comum'}</td>
                                    </tr>
                                )
                            })}
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

export default UsersCMS
