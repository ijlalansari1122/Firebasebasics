import React, { Component } from "react";


class Sigin extends Component{
  
state={
    email:'',
    password:''

    }
    handlechange = (e) => {
        this.state({
            [e.target.id]: e.target.value
        })
    }
    handlesubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

render(){

return(
<div className="container">
    <form onSubmit={this.handlesubmit} className="white">
<h5 className="grey-text text-darken-5"></h5>
<div className="input-field">
<label htmlFor="email">Email</label>
<input type="email" id="email" onChange={this.handlechange}/>

</div>

<div className="input-field">
<label htmlFor="password">passwords</label>
<input type="password" id="password" onChange={this.handlechange}/> 





</div>


<div className="input-field">
    <button className="btn pink lighten-1 z-depth-0">
        Login
    </button>

</div>

    </form>


</div>


)

}

}
export default Sigin