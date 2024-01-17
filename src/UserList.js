import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    setListOfUsers(response.data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        };
        

    fetchData();
    }, []);

return (
<div className="flex items-center justify-center">
    <div className="bg-white shadow-md rounded-md p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Tableau de bord</h2>
        <ul>
            {listOfUsers.map(user => (
                <li key={user.id} className="mb-2">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                        <div>
                            <p className="text-gray-800 font-semibold">{user.name}</p>
                            <p className="text-gray-600">Username: {user.username}</p>
                            <p className="text-gray-600">Email: {user.email}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
</div>
);
};

export default UserList;
