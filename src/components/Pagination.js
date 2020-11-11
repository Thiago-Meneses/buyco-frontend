import React from 'react';

const Pagination = ({ usersPerPage , totalUsers , paginate , currentPage }) => {
    const pageNumbers = [];

    for ( let i=1 ; i<=Math.ceil(totalUsers/usersPerPage) ; i++ ) {
        pageNumbers.push(i);
    }

    return (
        <div id='container'>
            <nav className='navigation-bar'>
                <button onClick={
                    () => {
                        if ( currentPage>1 )
                            paginate(currentPage-1)
                    }
                }>
                Anterior
                </button>

                <button> {currentPage} </button>

                <button onClick={
                    () => {
                        if ( currentPage < pageNumbers.length )
                            paginate(currentPage+1)
                    }
                }>
                Próxima
                </button>
            </nav>
        </div>

    )
}

export default Pagination