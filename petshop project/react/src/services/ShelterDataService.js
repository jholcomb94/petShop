import axios from 'axios'

class ShelterDataService{
    //retreive all Shelters
    retrieveAllShelters(){
        return axios.get(`http://localhost:8080/retreiveAllShelters`);
    }
    //retreive a Shelter
    retreiveShelter(id){
        return axios.get(`http://localhost:8080//retreiveShelter/${id}`);

    }
    //update a shelter
    updateShelter(Shelter){
        return axios.put(`http://localhost:8080/updateShelter/`,Shelter)

    }
    //add a Shelter
    addShelter(Shelter){
        return axios.post(`http://localhost:8080/addShelter/`, Shelter)

    }

    //delete a Shelter
    deleteShelter(id){
        return axios.delete(`http://localhost:8080/deleteShelter/${id}`)

    }
}
export default new ShelterDataService()