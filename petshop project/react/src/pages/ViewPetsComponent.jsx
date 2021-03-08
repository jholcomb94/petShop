import React, { Component } from 'react'
import PetDataService from '../services/PetDataService';

class ViewPetsComponent extends Component{
    constructor(props){
        super(props)
        this.state ={
            pets: []
        }
        this.refreshList = this.refreshList.bind(this)
    }
    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        PetDataService.retrieveAllPets()
        .then( response => {
            this.setState({
                pets: response.data
            })
        })
       
    }
    render(){
        return(
            <div className = "page">
                <table className = "table">
                    <thead>
                        <th>NAME</th>
                        <th>SPECIES</th>
                        <th>BREED</th>
                        <th>DESCRIPTION</th>
                        <th>ZIP</th>
                        <th>SHELTER</th>
                        <th>IMAGE</th>
                    </thead>
                    <tbody>
                        {
                            this.state.pets.map(
                                pets=>
                                <tr>
                                    <td>{pets.name}</td>
                                    <td>{pets.species}</td>
                                    <td>{pets.breed}</td>
                                    <td>{pets.description}</td>
                                    <td>{pets.zip}</td>
                                    <td>{pets.shelter}</td>
                                    <td><img src = {pets.image} alt ="" ></img></td>
                                </tr>
                            )
                        
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ViewPetsComponent