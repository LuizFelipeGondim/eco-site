import { useState } from "react"
import api from "../../services/api"

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
}




export default function usePublication () {
    const [forums, setForum] = useState<ForumResponse[]>([])
    const [name, setName] = useState<string>('')
    const [TotalForum, setTotalForum] = useState<number>()
    const [forumsLength, setForumLength] = useState<number>()

    function fetchForums (page: number, limit: number, name: string) {

        api.get<Response>(`forum?page=${page}&limit=${limit}&name=${name}`)
            .then(response => {

                const responseData = Object.values(response.data)
                const total = responseData[1] === undefined ? 0 : responseData[1]
                const countPages = responseData[2] === undefined ? 0 : responseData[2]
                
                setForum(responseData[0])
                setTotalForum(total)
                setForumLength(countPages)
        })
    }

    return {
        fetchForums,
        setForum,
        forums,
        TotalForum,
        forumsLength,
        setName,
        name,
    }
}