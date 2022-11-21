import React from "react";
import 'materialize-css'
import {  NavLink } from "react-router-dom";
const Signoutlinks = () => {

    return (
        <ul className="right">
            <li>
                <NavLink to='/'>Signup</NavLink>

            </li>
            <li>
                <NavLink to='/'>Login</NavLink>

            </li>
            

        </ul>



    )

}
export default Signoutlinks;