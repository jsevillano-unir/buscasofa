import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

function Header({ user, onLogout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        // 1. Borrar localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('email');

        // 2. Actualizar estado global de usuario
        if (onLogout) onLogout();

        // 3. Mostrar mensaje y redirigir
        alert('Sesión cerrada con éxito');
        navigate('/login');
    };

    return (
        <header>
            <nav>
                <Link to="/" style={{ marginRight: '1rem' }}>
                    <img src={logo} alt="Logo" style={{ height: '3em' }} />
                </Link>
                
                <Link className='buscador' to="/lista" style={{ marginRight: '1rem' }}>Buscador</Link>
                <Link className='mapa' to="/mapa" style={{ marginRight: '1rem' }}>Mapa</Link>
                <Link className='about' to="/about">Quienes somos</Link>
                
                <span style={{ marginLeft: 'auto', marginRight: '1rem', float: 'right' }}>
                    {!user ? (
                        <>
                            <Link className='login' to="/login" style={{ marginRight: '1rem' }}>Login</Link>
                            <Link className='registro' to="/registro">Registro</Link>
                        </>
                    ) : (
                        <>
                            <span style={{ marginRight: '1rem' }}>Bienvenido, <Link to="/perfil">{user}</Link></span>
                            <button onClick={handleLogout}>Cerrar sesión</button>
                        </>
                    )}
                </span>
            </nav>
        </header>
    );
}

export default Header;

