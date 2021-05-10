import { useState } from 'react'

const usePaginate = (perPage, data) => {
    const [currentPage, setCurrentPage] = useState(0)

    const pageCount = Math.ceil(data.length / perPage)
    const offset = currentPage * perPage
    const curPageData = data
        .slice(offset, offset + perPage)

    return {
        curPageData, setCurrentPage, pageCount
    }
}

export default usePaginate
