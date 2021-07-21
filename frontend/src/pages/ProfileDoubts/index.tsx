import React, { useCallback, useEffect, useState } from 'react'
import { format, parseISO } from 'date-fns'

import { Main, Content, Container } from './styles'
import { useToast } from '../../context/ToastContext'
import api from '../../services/api'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import ProfileSidebar from '../../components/ProfileSidebar'
import excluir from '../../assets/adminSVG/excluir.svg'

interface Doubt {
    id: string
    title: string
    created_at: string
    resolved: boolean
}


const Profile: React.FC = () => {
    const { addToast } = useToast()

    const [doubts, setDoubts] = useState<Doubt[]>([])

    useEffect(() => {
        api.get<Doubt[]>('/forum/profile/doubts')
            .then(response => setDoubts(response.data))
    }, [])

    const formatDate = useCallback((date: string) => {
        const [dateFormated, ] = date.split('T')
        const firstDate = parseISO(dateFormated)
        
        return format(
            firstDate,
            "dd'/'MM'/'yyyy",
        )
    }, [])

    const handleDeleteDoubt = useCallback(async (id: string) => {
        try {
            api.delete(`/forum/delete/doubts/${id}`)

            addToast({
                type: 'success',
                title: 'Exclusão Realizada!',
                description: 'Sua dúvida foi removida com sucesso.'
            })

            window.location.reload()
        } catch {
            addToast({
                type: 'error',
                title: 'Erro ao excluir',
                description: 'Ocorreu um erro ao excluir a dúvida, tente novamente mais tarde.'
            })
        }
    }, [addToast])
        
    return (
        
        <>
            <Menu></Menu>
            <Main>
                <Container>

                    <ProfileSidebar></ProfileSidebar>
                        
                    <Content>
                        {doubts.map(doubt => {
                            return (

                            <div className="doubt" key={doubt.id}>
                                <h2>{doubt.title}</h2>
                                <div className="doubt-footer">
                                    <div>
                                        {doubt.resolved === true ? 
                                            <span>Resolvida </span>
                                        : ''}
                                            
                                        <p> {formatDate(doubt.created_at)}</p>
                                    </div>
                                    <img src={excluir} onClick={() => handleDeleteDoubt(doubt.id)} alt="excluir" />
                                </div>
                            </div>
                            )
                        })}
                    </Content>
                </Container>
            </Main>
            <Footer></Footer>
        </>
    )
}

export default Profile