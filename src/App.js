import React , { useState , useEffect } from 'react';
import axios from 'axios';

import Users from './components/Users';
import Pagination from './components/Pagination';


const App = () => {
    const [users , setUsers] = useState([]);
    const [loading , setLoading] = useState(false);

    const [currentPage , setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:3000/users');
            setUsers(res.data);
            setLoading(false);
        }

        fetchUsers();
    }, []);


    const indexOfLastUsers = currentPage * usersPerPage;
    const indexOfFirstUsers = indexOfLastUsers - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUsers, indexOfLastUsers);
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Users
                users={currentUsers}
                loading={loading}
            /> 
            <Pagination
                currentPage={currentPage}
                usersPerPage={usersPerPage}
                totalUsers={users.length}
                paginate={paginate}
            />
        </div>
    );
};

export default App;