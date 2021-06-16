import { useCallback, useEffect, useState } from 'react'
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
        
    }, [location.search, history, actualPage])

    const handleBeforePage = useCallback(() => {
        setActualPage(actualPage - 1 <= 0 ? 1 : actualPage - 1)
    }, [setActualPage, actualPage])

    const handleAfterPage = useCallback((pageLimit) => {
        setActualPage(actualPage + 1 > pageLimit  ? actualPage : actualPage + 1)
    }, [setActualPage, actualPage ])

    return {
        setActualPage,
        actualPage,
        handleBeforePage,
        handleAfterPage
    }
}