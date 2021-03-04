package com.example.demo.IMPL;

import com.example.demo.entity.Pet;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;
@Repository
public class PetIMPL implements CRUD{
    private final EntityManager manager;

    @Autowired
    public PetIMPL(EntityManager manager) {
        this.manager = manager;
    }
    @Override
    @Transactional
    public List<Object> getAll() {
        Session session =  this.manager.unwrap(Session.class);
        Query<Object> query  = session.createQuery("from Pet");
        return query.getResultList();
    }
    @Override
    @Transactional
    public Object getById(int Id) {
        Session session = manager.unwrap(Session.class);
        return session.get(Pet.class,Id);
    }


    @Override
    @Transactional
    public void update(Object pet) {
        Session session = manager.unwrap(Session.class);
        session.saveOrUpdate(pet);
    }
    @Override
    @Transactional
    public void deleteById(int Id) {
        Session session = manager.unwrap(Session.class);
        Pet p = session.get(Pet.class,Id);
        session.delete(p);
    }
}
