package com.example.demo.rest;

import com.example.demo.IMPL.CRUD;
import com.example.demo.entity.Shelter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class ShelterController {
    private CRUD crud;

    @Autowired
    public ShelterController(@Qualifier("shelterIMPL") CRUD crud) {
        this.crud = crud;
    }
    @GetMapping({"/retreiveAllShelters"})
    public List<Object> getAll(){
        return crud.getAll();
    }
    @GetMapping({"/retreiveShelter/{shelterId}"})
    public Object receiveShelter(@PathVariable int shelterId) {
        return this.crud.getById(shelterId);
    }
    @PutMapping({"/updateShelter"})
    public Object updateShelter(@RequestBody Shelter shelter){
        crud.update(shelter);
        return shelter;
    }

    @DeleteMapping("/deleteShelter/{id}")
    public String deleteShelter(@PathVariable int id){
        Shelter shelter = (Shelter) crud.getById(id);
        if(shelter == null)
        {
            throw new RuntimeException("Shelter not found! id: " + id);
        }
        crud.deleteById(id);
        return "Deleted Shelter id: " + id;
    }

    @PostMapping("/addShelter")
    public Shelter addShelter(@RequestBody Shelter shelter)
    {
        shelter.setId(0);
        crud.update(shelter);
        return shelter;
    }
}
