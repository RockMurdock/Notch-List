import React from "react"
import { Link } from "react-router-dom"
import Authorization from "../auth/Authorization"


const NavBar = props => {
    const { isAuthenticated, logout } = Authorization()

    return (
        <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
            <ul className="nav nav-pills nav-fill">
                
                {
                    isAuthenticated()
                    ?<li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    :null
                }
                {
                    isAuthenticated()
                    ?<li className="nav-item">
                        <Link className="nav-link" to="/beers">Beer Reviews</Link>
                    </li>
                    :null
                }
                {
                    isAuthenticated()
                    ?<li className="nav-item">
                        <Link className="nav-link" to="/wines">Wine Reviews</Link>
                    </li>
                    :null
                }
                {
                    isAuthenticated()
                    ?<li className="nav-item">
                        <Link className="nav-link" to="/glassware">Glassware</Link>
                    </li>
                    :null
                }
                {
                    isAuthenticated() ?
                        <li className="nav-item">
                            <button className="nav-link fakeLink"
                                onClick={() => {
                                    logout()
                                    props.history.push("/login")
                                }
                                }
                            >Logout</button>
                        </li> :
                        <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        </>
                }
            </ul>
        </nav>
    )
}

export default NavBar