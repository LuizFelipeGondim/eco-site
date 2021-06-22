import { useState } from "react"
import api from "../../services/api"

interface UserResponse{
    id: string
    first_name: string
    created_at: string
    email: string
    city: string
    uf: string
    whatsapp: string
    is_staff: boolean
    avatar: string
}

interface Response {
    publications: Response[]
    count: number
    users: UserResponse[]
}

export default function usePublication () {
    const [users, setUsers] = useState<UserResponse[]>([])
    const [name, setName] = useState<string>('')
    const [totalUsers, setTotalUsers] = useState<number>()
    const [usersLength, setUsersLength] = useState<number>()

    function fetchUsers (page: number, limit: number, name: string) {

        api.get<Response>(`eco-admin/users?page=${page}&limit=${limit}&name=${name}`)
            .then(response => {

                const responseData = Object.values(response.data)
                const total = responseData[1] === undefined ? 0 : responseData[1]
                const countPages = responseData[2] === undefined ? 0 : responseData[2]
                
                setUsers(responseData[0])
                setTotalUsers(total)
                setUsersLength(countPages)
        })
    }

    return {
        fetchUsers,
        setUsers,
        users,
        totalUsers,
        usersLength,
        setName,
        name,
    }
}