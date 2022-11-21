import React from "react";
import 'materialize-css'
import { Link, NavLink } from "react-router-dom";
const Siginlinks = () => {

    return (
        <ul className="right">
            <li>
                <NavLink to='/'>New Projects</NavLink>

            </li>
            <li>
                <NavLink to='/'>Log out</NavLink>

            </li>
            <li>
                <NavLink to='/' className="btn btn-floating pink lighten-1">IA</NavLink>

            </li>
         

        </ul>



    )

}
export default Siginlinks;