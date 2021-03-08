import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class HomeComponent extends Component{

    render(){
        return(
            <div className = 'page'>
                <Link to="petList"><button className = "button2"> VIEW OUR PETS!</button></Link>
                <h2>edit lists</h2>
                <Link to="editpetList"><button className = "button1">pet list</button></Link>
                <Link to="editshelterList"><button className = "button1">shelter list</button></Link>
            </div>
        )
    }
}
export default HomeComponent