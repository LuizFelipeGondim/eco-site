import React, { useCallback, useEffect, useState } from 'react'
import { format, parseISO } from 'date-fns'

import author from '../../assets/imagensRemoviveis/author.svg'
import Menu from '../Menu'
import Footer from '../Footer'
import left from '../../assets/adminSVG/left.svg'
import right from '../../assets/adminSVG/right.svg'
import { Main, Content, Sidebar, Image, SmallImage } from './styles'
import usePagination from '../../context/Pagination/usePagination'
import usePublication from '../../context/Pagination/usePublications'
import { Input } from '../../components/Input/styles'
import { Link } from 'react-router-dom'

interface Category {
    id: string,
    category_name: string
}

interface PublicationResponse {
    title: string
    id: string
    situation: boolean
    categories: Category[]
    slug: string
    main_image: string
}

const Blog: React.FC = () => {
    const limit = 4
    const [latestPublications, setLatestPublications] = useState<PublicationResponse[]>([])
    const { actualPage, handleBeforePage, handleAfterPage } = usePagination()
    const { 
        publications, 
        fetchPublications, 
        count, 
        users 
    } = usePublication()

    const countAllPublications = count === undefined ? 0 : count
    const pageLimit = Math.ceil(countAllPublications/limit)

    useEffect(() => {
        fetchPublications(actualPage - 1, limit)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [limit, actualPage])

    useEffect(() => {
        setLatestPublications(publications.slice(-3))
    }, [publications])
    
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
                <Content>
                    <h1>Blog</h1>
                    {// eslint-disable-next-line array-callback-return
                    publications.map(publication => {
                        if(!publication.situation){
                            return (
                                <div className="card" key={publication.id}>
                                    <Image image={publication.main_image}></Image>
                                    <div className="info">
                                        <div className="info-header">
                                            <div>
                                                {publication.categories.map(category => 
                                                    <span>{category.category_name} </span> 
                                                )}
                                            </div>
                                            <p>{formatDate(publication.created_at)}</p>
                                        </div>

                                        <div className="info-content">
                                            <h1>{publication.title}</h1>
                                            <p>
                                                {publication.subtitle}
                                            </p>
                                        </div>

                                        <div className="info-footer">

                                            <div className="author">
                                                <img src={author} alt="Admin"/>
                                                <p>{users.map(user => 
                                                        user.id === publication.user_id 
                                                        ? user.first_name
                                                        : ''
                                                    )}
                                                </p>   
                                            </div>

                                            <Link to={`/publication/${publication.slug}`}>Leia mais 🡢</Link>

                                        </div>
                                    </div>
                                </div>
                            )
                        }
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
                <Sidebar>

                    <form method="get">
                        <Input type="text" placeholder="Pesquisar"/>
                    </form>

                    <h3>Últimas publicações</h3>

                    {// eslint-disable-next-line array-callback-return
                    latestPublications.map(publication => {
                        if(!publication.situation){
                            return(
                                
                                <Link to={`/publication/${publication.slug}`}>
                                    <div className="small-card" key={publication.id}>
                                        <SmallImage image={publication.main_image}></SmallImage>

                                        <div className="info">

                                            <div className="info-header">
                    
                                                <p>
                                                    {publication.categories.map(category => 
                                                        <span>{category.category_name} </span> 
                                                    )}
                                                </p>
                                            </div>

                                            <div className="info-content">
                                                <h3>{publication.title}</h3>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    })}
                </Sidebar>
   
            </Main>
            <Footer></Footer>
        </>
    )
}

export default Blog