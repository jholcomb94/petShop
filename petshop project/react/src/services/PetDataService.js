import axios from 'axios'

class PetDataService{
    //retreive all pets
    retrieveAllPets(){
        return axios.get(`http://localhost:8080/retreiveAllPets`);
    }
    //retreive a pet
    retreivePet(id){
        return axios.get(`http://localhost:8080//retreivePet/${id}`);

    }
    updatePet(pet){
        return axios.put(`http://localhost:8080/updatePet/`,pet)

    }
    //add a pet
    registerPet(pet){
        return axios.post(`http://localhost:8080/addPet/`, pet)

    }

    //delete a pet
    deletePet(id){
        return axios.delete(`http://localhost:8080/deletePet/${id}`)

    }
}
export default new PetDataService()