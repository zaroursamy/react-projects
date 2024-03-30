import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Menu() {


    // const setIsActiveCss = (isActive) => {
    //     return {
    //         borderBottom: isActive && "4px solid #61dafb",
    //     }
    // }

    const navItems = [{to: "/", label: "Docs"}, {to: "/tutorial", label: "Tutorial"}, {to: "/community", label: "Community"}, {to: "/under-construction", label: "UnderConstruction"}]

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">React</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {
                        navItems.map(({to, label}, i) => (
                                <li
                                    key={i}
                                    className="nav-item">
                                    <NavLink exact={true} 
                                    // style={setIsActiveCss}  
                                    className="nav-link" 
                                    to={to} 
                                    >{label}</NavLink>
                                </li>
                                ))
                        }

                    </ul>
                </div>
            </div>
        </nav>
        )
    }
    
    export default Menu