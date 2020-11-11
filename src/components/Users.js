import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Users.css'


const Users = ({ users , loading }) => {
    if (loading){
        return <h2>Loading...</h2>
    }

    return (
        <div id='container-list'>
            <div id='list-header'>
                <p className='list-id'>Id</p>
                <p className='list-name'>Nome</p>
                <p className='list-email'>Email</p>
                <p className='list-detail-header'>Ver detalhes</p>
            </div>
            {users.map(
            user => (
                <div id='list-content' key={user.id}>
                    <div className='list-id'>{user.id}</div>
                    <div className='list-name'>{user.firstName} {user.lastName}</div>
                    <div className='list-email'>{user.email}</div>
                    <Link className='see-details' to={{
                        pathname:'/details',
                        userSelected:{
                            id:user.id
                        }
                    }}>
                    Clique aqui
                    </Link>
                </div>
            )
            )}
                <Link to='/signup' id='link-signup'>CADASTRE-SE</Link>
        </div>
    )
}

export default Users;

