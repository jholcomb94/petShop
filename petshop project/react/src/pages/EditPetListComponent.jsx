import React, { Component } from 'react'
import PetDataService from '../services/PetDataService';
import ShelterDataService from '../services/ShelterDataService';

class  EditPetListComponent extends Component{
    constructor(props){
        super(props)
        this.state ={
            Pet: [],
            Shelter:[],
            name: "nameless",
            species: "N/A",
            breed: "N/A",
            description: "N/A", 
            zip: "00000",
            image: "https://icon2.cleanpng.com/20171221/eaq/dog-silhouette-png-transparent-clip-art-image-5a3bc473427857.1814166615138663552723.jpg",
            shelterID: "scraps",
            shelterName: "",
            shelterAddress: "",
            petID: 0,
        }
        this.refreshList = this.refreshList.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handlePetAdd = this.handlePetAdd.bind(this)
        this.handlePetUpdate = this.handlePetUpdate.bind(this)
        this.handlePetDelete = this.handlePetDelete.bind(this)
    }
    componentDidMount(){
        this.refreshList();
    }

    refreshList(){
        PetDataService.retrieveAllPets()
        .then( response => {
            this.setState({
                Pet: response.data
            })
            console.log(response.data)
        })
        
        ShelterDataService.retrieveAllShelters()
        .then( response =>{
                this.setState({
                    Shelter : response.data
                    
                })
                console.log(response.data)
             }
        )
       
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.name)
    }
    handlePetAdd(){
        let newPet ={
            name: this.state.name,
            species: this.state.species,
            breed:this.state.breed,
            description: this.state.description,
            zip: this.state.zip,
            shelter:this.state.shelterID,
            image: this.state.image,
        }
        console.log(newPet)
        PetDataService.registerPet(newPet)
        this.refreshList()
    }
    handlePetUpdate(){
        let newPet ={
            id: this.state.petID,
            name: this.state.name,
            species: this.state.species,
            breed:this.state.breed,
            description: this.state.description,
            zip: this.state.zip,
            shelter:this.state.shelterID,
            image: this.state.image
        }
        console.log(newPet)
        PetDataService.updatePet(newPet)
        this.refreshList()
    }
    handlePetDelete(){

        PetDataService.deletePet(this.state.petID)
        alert('deleted pet with id:' + this.state.petID)
    }

    render(){
        return(
            <div className = "page">
                    <table>
                        <thead>
                            <th>ID</th>
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
                                this.state.Pet.map(
                                    Pet=>
                                    <tr>
                                        <td>{Pet.id}</td>
                                        <td>{Pet.name}</td>
                                        <td>{Pet.species}</td>
                                        <td>{Pet.breed}</td>
                                        <td>{Pet.description}</td>
                                        <td>{Pet.zip}</td>
                                        <td>{Pet.shelter}</td>
                                        <td><img src = {Pet.image} alt ="" style = {{height:"200px", width: "200px"}} ></img></td>
                                    </tr>
                                )
                                
                            }
                            <h3>ADD TO LIST</h3>
                            <tr>
                                
                                <td></td>
                                <td><input type = "text" name = "name" onChange = {this.handleChange} placeholder = "name"></input></td>
                                <td><input type = "text" name = "species" onChange = {this.handleChange} placeholder = "species"></input></td>
                                <td><input type = "text" name = "breed" onChange = {this.handleChange} placeholder = "breed"></input></td>
                                <td><input type = "text" name = "description" onChange = {this.handleChange} placeholder = "description"></input></td>
                                <td><input type = "text" name = "zip" onChange = {this.handleChange} placeholder = "zip"></input></td>
                                <td><select name = "shelterID" onChange = {this.handleChange} >{
                                        this.state.Shelter.map(
                                            Shelter=>
                                            <option value = {Shelter.name}>{Shelter.name}</option>
                                        )
                                        }</select></td>
                                <td><input type = "text" name = "image" onChange = {this.handleChange} placeholder = "image url"></input></td>
                                <td><button onClick = {this.handlePetAdd}>Submit</button></td>
                            </tr>

                            <tr>
                              
                               <td><h3>UPDATE FROM LIST</h3></td>
                            </tr>

                            <tr>
                                
                                <td><input type = "text" name = "petID" onChange = {this.handleChange} placeholder = "ID"></input></td>
                                <td><input type = "text" name = "name" onChange = {this.handleChange} placeholder = "name"></input></td>
                                <td><input type = "text" name = "species" onChange = {this.handleChange} placeholder = "species"></input></td>
                                <td><input type = "text" name = "breed" onChange = {this.handleChange} placeholder = "breed"></input></td>
                                <td><input type = "text" name = "description" onChange = {this.handleChange} placeholder = "description"></input></td>
                                <td><input type = "text" name = "zip" onChange = {this.handleChange} placeholder = "zip"></input></td>
                                <td><select name = "shelterID" onChange = {this.handleChange} >{
                                        this.state.Shelter.map(
                                            Shelter=>
                                            <option value = {Shelter.name}>{Shelter.name}</option>
                                        )
                                        }</select></td>
                                <td><input type = "text" name = "image" onChange = {this.handleChange} placeholder = "image"></input></td>
                                <td><button onClick = {this.handlePetUpdate}>Submit</button></td>
                            </tr>
                                <h3>DELETE FROM LIST</h3>
                            <tr>
                                <td><input type = "text" name = "petID" onChange = {this.handleChange} placeholder = "ID"></input></td>
                                <td><button onClick = {this.handlePetDelete} >DELETE</button> </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        )
    }

}
export default EditPetListComponent;