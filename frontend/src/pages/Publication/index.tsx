import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'

import Menu from '../Menu'
import Footer from '../Footer'
import { Main, Banner, Container } from './styles'
import api from '../../services/api'
import { format, parseISO } from 'date-fns'


interface Category {
    id: string,
    category_name: string
}

interface Response {
    publication: PublicationResponse
    tags: TagResponse[]
    user: UserResponse
}
interface PublicationResponse {
    title: string
    id: string
    user_id: string
    created_at: string
    content: string
    slug: string
    main_image: string
    subtitle: string
    categories: Category[]
}

interface TagResponse {
    id: string
    tag_name: string
}

interface UserResponse{
    id: string
    publication_id: string
    first_name: string
}

interface RouteParams {
    slug: string
}

const Publication: React.FC = () => {

    const { slug } = useParams<RouteParams>()

    const [publication, setPublication] = useState<PublicationResponse>()
    const [user, setUser] = useState<UserResponse>()
    const [tags, setTags] = useState<TagResponse[]>([])

    useEffect(() => {
        api.get<Response>(`/publications/${slug}`)
            .then(response => {
    
                const responseData = Object.values(response.data)

                setPublication(responseData[0])
                setUser(responseData[1])
                setTags(responseData[2])
    
            })
    }, [slug])
    console.log(tags)
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
            <Menu/>
            <Main>
                {publication && user && (
                    <Banner image={publication.main_image}>
                        <div>
                            <div className="categories">
                                {publication.categories.map(category => 
                                    <span>{category.category_name} </span> 
                                )}
                            </div>
                            <h1>{publication.title}</h1>
                            <p>{publication.subtitle}</p>
                            <div className="metadata">
                                <span>Por {user.first_name}</span>
                                <p>{formatDate(publication.created_at)}</p>
                            </div>
                        </div>
                    </Banner>
                )}
                {publication && tags && (
                    <Container>
                        <div className="content">
                            {ReactHtmlParser(publication.content)}
                            <div className="tags">
                                <p>Tags: </p>
                                {tags.map(tag => 
                                    <span>#{tag.tag_name}</span>
                                )}
                            </div>
                        </div>
                    </Container>
                )}
            </Main>
            <Footer></Footer>
        </>
    )
}

export default Publication