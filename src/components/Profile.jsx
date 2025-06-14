// src/components/Profile.jsx

import React from 'react';

function Profile({ user }) {
    const email = localStorage.getItem('email');
    return (
        <div className="profile">
            <h2>Perfil de {user}</h2>
            <p>Información personal:</p>
            <div>
                <strong>Nombre: </strong>{user}
            </div>
            <div>
                <strong>Email: </strong>{email} 
            </div>                         
        </div>
    );
}

export default Profile;
