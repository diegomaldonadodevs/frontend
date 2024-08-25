import React from 'react';
import '../../styles/components/layout/Nav.css';
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            < NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}> Home </ NavLink>
                        </li>
                        <li className="nav-item">
                            < NavLink to="/aikido" className={({ isActive }) => isActive ? "activo" : undefined}>Aikido</NavLink>
                        </li>
                        <li className="nav-item">
                            < NavLink to="/aikidoKids" className={({ isActive }) => isActive ? "activo" : undefined}>Aikido Kids</NavLink>
                        </li >
                        <li className="nav-item">
                            < NavLink to="/horarios" className={({ isActive }) => isActive ? "activo" : undefined}>Horarios</NavLink>
                        </li >
                        <li className="nav-item">
                            < NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : undefined}>Nosotros</NavLink>
                        </li >
                        <li className="nav-item">
                            < NavLink to="/eventos" className={({ isActive }) => isActive ? "activo" : undefined}>Eventos</NavLink>
                        </li >
                        <li className="nav-item">
                            < NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined}>Contacto</NavLink>
                        </li >
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;