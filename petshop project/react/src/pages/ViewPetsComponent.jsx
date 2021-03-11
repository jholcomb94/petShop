import React, { Component } from 'react'
import PetDataService from '../services/PetDataService';
import ShelterDataService from '../services/ShelterDataService';

class ViewPetsComponent extends Component{
    constructor(props){
        super(props)
        this.state ={
            pets: [],
            shelters: [],
            shelterFilter: "scraps",
            speciesFilter: "cat",
        }
        this.refreshList = this.refreshList.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.fliterShelterSubmit = this.fliterShelterSubmit.bind(this)
        this.filterSpeciesSubmit = this.filterSpeciesSubmit.bind(this)
    }
    componentDidMount(){
        this.refreshList();
    }   
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.name)
    }
    refreshList(){
        PetDataService.retrieveAllPets()
        .then( response => {
            this.setState({
                pets: response.data
            }) 
        })
        ShelterDataService.retrieveAllShelters()
            .then( response =>{
                this.setState({
                    shelters : response.data
                    
                })
                console.log(response.data)
             })
        
       
    }
    fliterShelterSubmit(){
        const result = this.state.pets.filter(pet => pet.shelter == this.state.shelterFilter)
        console.log(this.state.shelterFilter)
        this.setState({
            pets: result
        })
    }
    filterSpeciesSubmit(){
        const result = this.state.pets.filter(pet => pet.species == this.state.speciesFilter)
        console.log(this.state.speciesFilter)
        this.setState({
            pets: result
        })
    }
    render(){
        return(
            <div className = "page">
                <table>
                        <th>FILTERS</th>
                        <td></td>
                        <td><th>shelter:</th></td>
                        <td><select name = "shelterFilter" onChange = {this.handleChange} >{
                                        this.state.shelters.map(
                                            Shelter=>
                                            <option value = {Shelter.name}>{Shelter.name}</option>
                                        )
                                        }</select></td>
                        <td><button onClick = {this.fliterShelterSubmit}>submit</button></td>
                        <td><th>species:</th></td>
                        <td>
                            <select name = "speciesFilter" onChange = {this.handleChange} >
                                <option value = "cat">cat</option>
                                <option value = "dog">dog</option>
                                <option value = "farm">farm animals</option>
                                <option value = "fish">fish</option>
                                <option value = "reptiles">reptiles</option>
                            </select>
                        </td>
                        <td><button onClick = {this.filterSpeciesSubmit}>submit</button></td>
                        
                </table>
                <br></br>
                <table className = "table">
                    <thead>
                        <th></th>
                        <th >NAME</th>
                        <th>SPECIES</th>
                        <th>BREED</th>
                        <th>DESCRIPTION</th>
                        <th >ZIP</th>
                        <th>SHELTER</th>
                    </thead>
                    <tbody>
                        {
                            this.state.pets.map(
                                pets=>
                                <tr>
                                    <td><a><img src = {pets.image} alt ="" style = {{height:"200px", width: "200px"}} ></img></a></td>
                                    <td className = "tabledata">{pets.name}</td>
                                    <td className = "tabledata">{pets.species}</td>
                                    <td className = "tabledata">{pets.breed}</td>
                                    <td className = "tabledata">{pets.description}</td>
                                    <td className = "tabledata">{pets.zip}</td>
                                    <td className = "tabledata">{pets.shelter}</td>
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