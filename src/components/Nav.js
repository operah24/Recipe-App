import React from 'react'
import '../styles/Nav.css'
import { NavLink, useLocation } from 'react-router-dom';
import Button from './Button';
function Nav() {
    const location = useLocation();
    
    return (
        <div className="nav">
            {location.pathname === "/main" ? "" : (<ul className="links">
                <li>
                    <NavLink to = '/login'>
                        <Button name = "Login" className="login-btn" />
                    </NavLink>
                </li>
                <li>
                    
                    <NavLink to = '/register'>
                        <Button name="Signup" className="register-btn"/>
                    </NavLink>
                </li>

            </ul>)}
            
        </div>
    )
}

export default Nav

