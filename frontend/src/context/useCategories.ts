import { useState } from "react"
import api from "../services/api"

interface CategoryResponse {
    categories: {
        category_name: string,
        id: string
    }
    count: number
}

interface Response {
    category_name: string
    id: string
}

export default function useCategories (limit: number) {
    const [categories, setCategories] = useState<Response[]>([])
    const [count, setCount] = useState<number>()

    function fetchCategories (page: number) {

        api.get<CategoryResponse>(`eco-admin/categories?page=${page}&limit=${limit}`)
            .then(response => {
                const responseData = Object.values(response.data)
                const countPages = responseData[1] === undefined ? 0 : responseData[1]
                
                setCategories(responseData[0])
                setCount(countPages)

            })
    }


    return {
        fetchCategories,
        categories,
        count
    }
}