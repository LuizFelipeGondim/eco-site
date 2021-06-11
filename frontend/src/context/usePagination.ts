import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import qs from 'query-string'

export default function usePagination() {
    const location = useLocation()
    const history = useHistory()

    const [actualPage, setActualPage] = useState(
        getActualPage() || 1
    )

    function getActualPage() {
        const queryParams = qs.parse(location.search)
        const page = queryParams.page

        return page ? Number(page) : undefined
    }

    useEffect(() => {
        const queryParams = qs.parse(location.search)

        history.push({
            search: qs.stringify({
                ...queryParams,
                page: actualPage
            })
        })
    }, [actualPage, history, location])

    return {
        setActualPage,
        actualPage
    }
}