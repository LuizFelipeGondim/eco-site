import { useState } from "react"
import api from "../../services/api"

interface Category {
    id: string,
    category_name: string
}
interface PublicationResponse {
    title: string
    id: string
    user_id: string
    situation: boolean
    created_at: string
    slug: string
    main_image: string
    subtitle: string
    categories: Category[]
}

interface UserResponse{
    id: string
    first_name: string
}

interface Response {
    publications: Response[]
    count: number
    users: UserResponse[]
}

export default function usePublication () {
    const [publications, setPublications] = useState<PublicationResponse[]>([])
    const [users, setUsers] = useState<UserResponse[]>([])
    const [name, setName] = useState<string>('')
    const [totalPublications, setTotalPublications] = useState<number>()
    const [publicationsLength, setPublicationsLength] = useState<number>()

    function fetchPublications (page: number, limit: number, name: string) {

        api.get<Response>(`eco-admin/publications?page=${page}&limit=${limit}&name=${name}`)
            .then(response => {

                const responseData = Object.values(response.data)
                const total = responseData[1] === undefined ? 0 : responseData[1]
                const countPages = responseData[3] === undefined ? 0 : responseData[3]
                
                setPublications(responseData[0])
                setTotalPublications(total)
                setUsers(responseData[2])
                setPublicationsLength(countPages)
        })
    }

    return {
        fetchPublications,
        setPublications,
        publications,
        totalPublications,
        publicationsLength,
        setName,
        name,
        users
    }
}