import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../auth/hooks';


export const Navbar = () => {

    const navigate = useNavigate();
    const { startLogout, user } = useAuthStore();

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Meente&Aptness
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive? 'active':''}` }
                        to="/reports"
                    >
                        Reportes
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive? 'active':''}` }
                        to="/clients"
                    >
                        Clientes
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive? 'active':''}` }
                        to="/devices"
                    >
                        Equipos
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive? 'active':''}` }
                        to="/"
                    >
                        Factura
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        { user.names }
                    </span>
                    &nbsp;
                    <button
                        className="nav-item nav-link btn border"
                        onClick={ startLogout }
                    >
                        <i className='fas fa-sign-out-alt'></i>
                        &nbsp;
                        <span>Salir</span>
                    </button>
                </ul>
            </div>
        </nav>
    )
}