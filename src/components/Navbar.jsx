import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "navbar-brand text-center ms-4 fw-bold" : "navbar-brand text-center ms-4"
                        }
                        aria-current={({ isActive }) => (isActive ? "page" : undefined)}>
                        PAOLA <br /> SALAZAR
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "nav-link text-dark fw-bold" : "nav-link text-dark"
                                }
                                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/experience"
                                className={({ isActive }) =>
                                    isActive ? "nav-link text-dark fw-bold" : "nav-link text-dark"
                                }
                                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                            >
                                Experience
                            </NavLink>

                            <NavLink
                                to="/skills"
                                className={({ isActive }) =>
                                    isActive ? "nav-link text-dark fw-bold" : "nav-link text-dark"
                                }
                                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                            >
                                Skills
                            </NavLink>

                            <NavLink
                                to="/certificates"
                                className={({ isActive }) =>
                                    isActive ? "nav-link text-dark fw-bold" : "nav-link text-dark"
                                }
                                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                            >
                                Certificates
                            </NavLink>

                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? "nav-link text-dark fw-bold" : "nav-link text-dark"
                                }
                                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                            >
                                Contact
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar