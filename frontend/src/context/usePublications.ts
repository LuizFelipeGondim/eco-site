import { useState } from "react"
import api from "../services/api"


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
    const [count, setCount] = useState<number>()
    const [users, setUsers] = useState<UserResponse[]>([])

    function fetchPublications (page: number, limit: number) {

        api.get<Response>(`eco-admin/publications?page=${page}&limit=${limit}`)
            .then(response => {

                const responseData = Object.values(response.data)
                const countPages = responseData[1] === undefined ? 0 : responseData[1]
                
                setPublications(responseData[0])
                setCount(countPages)
                setUsers(responseData[2])

            })
    }

    

    return {
        fetchPublications,
        setPublications,
        publications,
        count,
        users
    }
}