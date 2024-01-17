import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    // État local pour stocker la liste des utilisateurs
    const [listOfUsers, setListOfUsers] = useState([]);

    // Effet secondaire utilisant useEffect pour effectuer des opérations asynchrones
    useEffect(() => {
        // Fonction fetchData pour effectuer la requête API
        const fetchData = () => {
            // Appel Axios pour récupérer les utilisateurs depuis l'API JSONPlaceholder
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    // Met à jour l'état local avec la liste d'utilisateurs obtenue
                    setListOfUsers(response.data);
                })
                .catch(error => {
                    // Gestion des erreurs en cas d'échec de la requête
                    console.error('Error fetching data:', error);
                });
        };

        // Appelle la fonction fetchData au montage du composant (une seule fois avec une dépendance vide [])
        fetchData();
    }, []); // Les crochets vides indiquent que cet effet ne dépend d'aucune propriété

return (
<div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
  <div className="flex items-center justify-between mb-8">
    <div>
      <h2 className="text-2xl font-bold text-gray-800">Users List</h2>
    </div>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {listOfUsers.map((user) => (
      <div key={user.id} className="bg-white rounded-lg overflow-hidden shadow-md mb-4">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
            <div>
              <p className="text-gray-800 font-semibold">{user.name}</p>
              <p className="text-gray-600">Username: <span className="text-gray-800">{user.username}</span></p>
              <p className="text-gray-600">Email: <span className="text-gray-800">{user.email}</span></p>
              <p className="text-gray-600">Phone: <span className="text-gray-800">{user.phone}</span></p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

);
};

export default UserList;
