import React, { useCallback, useEffect } from 'react'
import { format, parseISO } from 'date-fns'
import ReactHtmlParser from 'react-html-parser'

import Menu from '../Menu'
import Footer from '../Footer'
import left from '../../assets/adminSVG/left.svg'
import right from '../../assets/adminSVG/right.svg'
import { Main, Content, Sidebar } from './styles'
import usePagination from '../../context/Pagination/usePagination'
import usePublication from '../../context/Pagination/useForums'
import { Input } from '../../components/Input/styles'
import { Link } from 'react-router-dom'


const Blog: React.FC = () => {
    const limit = 10
    const { actualPage, handleBeforePage, handleAfterPage } = usePagination()
    const { 
        forums, 
        fetchForums, 
        forumsLength,
        setName,
        name,
    } = usePublication()

    const countAllForums = forumsLength === undefined ? 0 : forumsLength
    const pageLimit = Math.ceil(countAllForums/limit)

    useEffect(() => {
        fetchForums(actualPage - 1, limit, name)
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

    return (
        <>
            <Menu></Menu>
            <Main> 
                <Sidebar>
                    <h1>Fórum</h1>
                    <form method="get">
                        <Input type="text" placeholder="Pesquisar" onChange={handleChangeName}/>
                    </form>

                    <Link to='/forum/create'>
                        <button>Adicionar Dúvida</button> 
                    </Link>
                </Sidebar> 
                <Content>
                    
                    {// eslint-disable-next-line array-callback-return
                    forums.map(forum => {
                        return (
                            <Link to={`/forum/${forum.slug}`} className="card" key={forum.id}>
                                    
                                <div className="info-header">
                                    <h1>{forum.title}</h1>
                                </div>

                                <div className="info-content">
                                    <p>
                                        {ReactHtmlParser(forum.content)}
                                    </p>
                                </div>

                                <div className="info-footer">

                                    <img src={forum.author.avatar} alt="Autor"/>
                                    <p>
                                        {forum.author.first_name}
                                    </p>

                                    {forum.resolved === true ? 
                                        <span>Resolvida</span> 
                                    : ''}
                                        
                                    <p>- {formatDate(forum.created_at)}</p>

                                </div>
                            </Link>
                        )
                    
                    })}

                    <div className="pagination">
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
                </Content>
                
   
            </Main>
            <Footer></Footer>
        </>
    )
}

export default Blog