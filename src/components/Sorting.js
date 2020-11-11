import React from 'react';
import { Link } from 'react-router-dom';


const Users = ({ users , loading }) => {
    if (loading){
        return <h2>Loading...</h2>
    }

    return (
        <div id='container-list'>
            <div id='list-header'>
                <a className='list-id'>Id</a>
                <a className='list-name'>Nome</a>
                <a className='list-email'>Email</a>
                <a className='list-detail-header'>Ver detalhes</a>
            </div>
            {users.map(
            user => (
                <div id='list-content' key={user.id}>
                    <a className='list-id'>{user.id}</a>
                    <div className='list-name'>{user.firstName} {user.lastName}</div>
                    <div className='list-email'>{user.email}</div>
                    <button onClick={() => beginn(user.id)}>Details</button>
                </div>
            )
            )}

            <div id='container-signup'>
                <Link to='/signup' id='olokoo'>CADASTRE-SE</Link>
            </div>

        </div>
    )
}

export default Users;
