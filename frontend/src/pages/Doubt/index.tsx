import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import Menu from '../Menu'
import Footer from '../Footer'
import excluir from '../../assets/adminSVG/excluir.svg'
import { Main, Container, Editor } from './styles'
import api from '../../services/api'
import { format, parseISO } from 'date-fns'
import { useToast } from '../../context/ToastContext'


interface Tags {
    id: string
    tag_name: string
}

interface Author {
    id: string,
    first_name: string
    last_name: string
    avatar: string
}
interface ForumResponse {
    title: string
    id: string
    user_id: string
    resolved: boolean
    created_at: string
    slug: string
    content: string
    author: Author
    tags: Tags[]
}

interface CommentResponse {
    id: string
    created_at: string
    content: string
    user: Author
}

interface RouteParams {
    slug: string
}

interface User {
    id: string
}

const Doubt: React.FC = () => {
    const { addToast } = useToast()
    const { slug } = useParams<RouteParams>()
    
    const [forum, setForum] = useState<ForumResponse>()
    const [comments, setComments] = useState<CommentResponse[]>([])
    const [content, setContent] = useState('')
    const [user, setUser] = useState<User>()
    
    if(localStorage.getItem('@Ecoblog:user')){
        
    }

    useEffect(() => {
        let userString = localStorage.getItem('@Ecoblog:user') || 'Gambiarra'
        setUser(JSON.parse(userString))
    }, [])

    useEffect(() => {
        api.get<ForumResponse>(`/forum/${slug}`)
            .then(response => {
                setForum(response.data)
            })
    }, [slug])

    useEffect(() => {
        api.get<CommentResponse[]>(`/forum/comments/${forum?.id}`)
            .then(response => {
                setComments(response.data)
            })
    }, [forum])

    const formatDate = useCallback((date: string) => {
        const [dateFormated, ] = date.split('T')
        const firstDate = parseISO(dateFormated)
        
        return format(
            firstDate,
            "dd'/'MM'/'yyyy",
        )
    }, [])

    const handleChangeContent = useCallback((evt, editor) => {
        const dataContent = editor.getData()

        setContent(dataContent)
    }, [])

    const handleSubmit = useCallback(() => {
        if (content !== ''){

            const forum_id = forum?.id
            
            const data = {
                forum_id,
                content
            } 

            try{
                api.post('/forum/comments/create', data)

                
                addToast({
                    type: 'success',
                    title: 'Comentário Realizado!',
                    description: 'Seu comentário foi cadastrado com sucesso.'
                })
                window.location.reload(true)
                
            } catch {
                addToast({
                    type: 'error',
                    title: 'Comentário Não Realizado!',
                    description: 'Seu comentário não foi cadastrado.'
                })
            }
        }
        
    }, [forum, content, addToast])

    const handleCloseDoubt = useCallback(() => {

        api.get(`/forum/to-close/${slug}`)

        window.location.reload(true)

    }, [slug])

    const handleDeleteComment = useCallback((id) => {

        api.delete(`/forum/comments/delete/${id}`)

        window.location.reload(true)

    }, [])

    return (
        <>
            <Menu></Menu>
            <Main>
                
                {forum && (
                    <Container key={forum.id}>
                        <div className="header">
                            <h1>{forum.title}</h1>
                            <div>
                                <span>{forum.author.first_name} - {formatDate(forum.created_at)}</span>
                                { forum.resolved ? 
                                    <span className="resolved">Resolvida</span> :
                                    forum.author.id === user?.id ? 
                                        <button onClick={handleCloseDoubt}>Fechar Dúvida</button> :
                                        ''    
                                }
                            </div>
                        </div>
                        <div className="content">
                            {ReactHtmlParser(forum.content)}
                            <div className="tags">
                                <p>Tags: </p>
                                {forum.tags.map(tag => 
                                    <span key={tag.id}>#{tag.tag_name}</span>
                                )}
                            </div>
                        </div>
                        { comments && (
                            <div className="comments">
                                <h2>Comentários</h2>
                                {comments.map(comment => {
                                    return (
                                        <div className="comment" key={comment.id}>
                                            <div className="comment-header">
                                                <div>
                                                    <img src={comment.user.avatar} alt="" />
                                                    <p>{comment.user.first_name}</p>
                                                    <span>- {formatDate(comment.created_at)}</span>
                                                </div>

                                                { comment.user.id === user?.id ? 
                                                    <img src={excluir} alt="Excluir" onClick={() => handleDeleteComment(comment.id)}/> 
                                                    : ''
                                                }
                                            </div>
                                            <div className="comment-content">
                                                {ReactHtmlParser(comment.content)}
                                            </div>
                                        </div>
                                    )
                                })}
                                { forum.resolved ? 
                                    '' :    
                                    <Editor>
                                        <h2>Deixe uma resposta</h2>
                                        <CKEditor 
                                            editor = {ClassicEditor}
                                            data = {''}
                                            onChange = {handleChangeContent}
                                        />
                                        <button onClick={() => handleSubmit()}>Responder</button>
                                    </Editor>
                                }
                            </div>
                        )}
                    </Container>
                )}
            </Main>
            <Footer></Footer>
        </>
    )
}

export default Doubt