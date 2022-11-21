import React from "react";


const ProjectDetails=(props)=>{
    console.log(props);
    
    const id = props.match.params.id;
    return(
<div className="container section project-details">
<div className="card z-depth-0">
    <div className="card-content">
        <span className="card-title">

project title - {id}
        </span>

<p>lorem saas askjdas asdoin asdiajd aijdaln lajd lkasd</p>

    </div>
    <div className="card-action gret lighten-4 grey-text">
<div>Posted by Net Ninja</div>
<div>4th january 2020 , {Date}</div>
    </div>



</div>




</div>



    )
}
export default ProjectDetails;