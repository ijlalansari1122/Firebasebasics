import React from "react";
import 'materialize-css'
import { Link } from "react-router-dom";
import Siginlinks from "./Siginlinks";
import Signoutlinks from "./signoutlinks";


/**********------------------Navbar---------------------------------***************/
const Navbar =()=>{

return(
    <nav className="nav-wrapper black text-blue light-4">

<div className="container">

<Link to='/' className="brand-logo">Ansariplan</Link>
<Siginlinks/>
<Signoutlinks/>

</div>

</nav>



)

}
export default Navbar;