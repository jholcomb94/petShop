package com.example.demo.rest;

import com.example.demo.IMPL.CRUD;
import com.example.demo.entity.Pet;
import com.example.demo.entity.Shelter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class PetController {
    private CRUD crud;

    @Autowired
    public PetController(@Qualifier("petIMPL") CRUD crud) {
        this.crud = crud;
    }
    @GetMapping({"/retreiveAllPets"})
    public List<Object> getAll(){
        return crud.getAll();
    }
    @GetMapping({"/retreivePet/{petId}"})
    public Object receivePet(@PathVariable int petId) {
        return this.crud.getById(petId);
    }
    @PutMapping({"/updatePet"})
    public Object updatePet(@RequestBody Pet pet){
        crud.update(pet);
        return pet;
    }

    @DeleteMapping("/deletePet/{id}")
    public String deletePet(@PathVariable int id){
        Pet pet = (Pet) crud.getById(id);
        if(pet == null)
        {
            throw new RuntimeException("Pet not found! id: " + id);
        }
        crud.deleteById(id);
        return "Deleted Pet id: " + id;
    }

    @PostMapping("/addPet")
    public Pet addPet(@RequestBody Pet pet)
    {
        pet.setId(0);
        crud.update(pet);
        return pet;
    }

}
