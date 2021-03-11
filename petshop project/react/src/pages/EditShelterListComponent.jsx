import React, { Component } from 'react'
import ShelterDataService from '../services/ShelterDataService';
import PetDataService from '../services/PetDataService';
class  EditShelterListComponent extends Component{
    constructor(props){
        super(props)
        this.state ={
            Shelter:[],
            pets: [], 
            shelterName: "",
            shelterAddress: "",
            shelterID: 0
        }
        this.refreshList = this.refreshList.bind(this)
        this.handleShelterAdd = this.handleShelterAdd.bind(this)
        this.handleShelterUpdate = this.handleShelterUpdate.bind(this)
        this.handleShelterDelete = this.handleShelterDelete.bind(this)
        this.handleChange = this.handleChange.bind(this)
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
        ShelterDataService.retrieveAllShelters()
        .then( response =>{
                this.setState({
                    Shelter : response.data
                    
                })
                console.log(response.data)
             })

        PetDataService.retrieveAllPets()
        .then( response => {
            this.setState({
                pets: response.data
            })
            console.log(response.data)
        })
        
    }
    handleShelterAdd(){
        let newShelter ={
            name: this.state.shelterName,
            address: this.state.shelterAddress
        }
        ShelterDataService.addShelter(newShelter)
        this.refreshList()
    }

    handleShelterUpdate(){
        let newShelter ={
            id: this.state.shelterID,
            name: this.state.shelterName,
            address: this.state.shelterAddress
        }
        console.log(newShelter)
        ShelterDataService.updateShelter(newShelter)
        this.refreshList()
    }
    handleShelterDelete(){
        ShelterDataService.retreiveShelter(this.state.shelterID).then(
            response => {
                const result = this.state.pets.filter(pet => pet.shelter == response.data.name)
                console.log(response.data.name)
                result.map(
                    pet => PetDataService.deletePet(pet.id)
                )
                
            }
            
        )
        ShelterDataService.deleteShelter(this.state.shelterID)
        alert("deleted shelter with id: " + this.state.shelterID)
    }

    render(){
        return (
        <div className = "page">
                <table>
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>ADDRESS</th>
                    </thead>

                    <tbody>
                        {
                            this.state.Shelter.map(
                                Shelter=>
                                <tr>
                                    <td>{Shelter.id}</td>
                                    <td>{Shelter.name}</td>
                                    <td>{Shelter.address}</td>
                                </tr>
                            )
                        }
                    <h3>ADD TO LIST</h3>
                        <tr>
                            <td></td>
                            <td><input type = "text" name = "shelterName" onChange = {this.handleChange} placeholder = "name"></input></td>
                            <td><input type = "text" name = "shelterAddress" onChange = {this.handleChange} placeholder = "address"></input></td>
                            <td><button onClick = {this.handleShelterAdd}>Submit</button></td>
                        </tr>
                    <h3>UPDATE FROM LIST</h3>
                        <tr>
                            <td><input type = "text" name = "shelterID" onChange = {this.handleChange} placeholder = "ID"></input></td>
                            <td><input type = "text" name = "shelterName" onChange = {this.handleChange} placeholder = "name"></input></td>
                            <td><input type = "text" name = "shelterAddress" onChange = {this.handleChange} placeholder = "address"></input></td>
                            <td><button onClick = {this.handleShelterUpdate}>Submit</button></td>

                        
                        </tr>
                    <h3>DELETE FROM LIST</h3>
                        <tr>
                            <td><input type = "text" name = "shelterID" onChange = {this.handleChange} placeholder = "ID"></input></td>
                            <td></td>
                            <td></td>
                            <td><button onClick = {this.handleShelterDelete}>Submit</button></td>
                        </tr>

                    </tbody>
                </table>
            <br></br> 
         </div>
        )
    }

}
export default EditShelterListComponent