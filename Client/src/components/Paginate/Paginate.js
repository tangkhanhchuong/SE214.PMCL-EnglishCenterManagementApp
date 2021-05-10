import React from 'react'
import ReactPaginate from "react-paginate"
import './paginate.css'

const Paginate = ({ setCurrentPage, pageCount }) => {
    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage)
    }

    return (
        <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            breakClassName={"pagination__item"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
        />
    )
}

export default Paginate
