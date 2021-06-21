import { useState } from "react"
import api from "../../services/api"

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

export default function useCategories () {
    const [categories, setCategories] = useState<Response[]>([])
    const [name, setName] = useState<string>('')
    const [totalCategories, setTotalCategories] = useState<number>()
    const [categoriesLength, setcategoriesLength] = useState<number>()

    function fetchCategories(page: number, limit: number, name: string) {

        api.get<CategoryResponse>(
            `eco-admin/categories/pagination?page=${page}&limit=${limit}&name=${name}`)
            .then(response => {
                const responseData = Object.values(response.data)
                const total = responseData[1] === undefined ? 0 : responseData[1]
                const countPages = responseData[2] === undefined ? 0 : responseData[2]
                
                setCategories(responseData[0])
                setTotalCategories(total)
                setcategoriesLength(countPages)

            })
    }


    return {
        fetchCategories,
        setCategories,
        setName,
        name,
        categories,
        totalCategories,
        categoriesLength
    }
}