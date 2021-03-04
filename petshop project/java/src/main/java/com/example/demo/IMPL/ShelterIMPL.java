package com.example.demo.IMPL;

import com.example.demo.entity.Shelter;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;
@Repository
public class ShelterIMPL implements CRUD{
    private final EntityManager manager;
    @Autowired
    public ShelterIMPL(EntityManager e){this.manager = e;}
    @Override
    @Transactional
    public List<Object> getAll() {
        Session session  = manager.unwrap(Session.class);
        Query<Object> query = session.createQuery("from Shelter ");
        return query.getResultList();
    }

    @Override
    @Transactional
    public Object getById(int Id) {
        Session session = manager.unwrap(Session.class);
        return session.get(Shelter.class,Id);
    }

    @Override
    @Transactional
    public void update(Object shelter) {
        Session session = manager.unwrap(Session.class);
        session.saveOrUpdate(shelter);
    }

    @Override
    @Transactional
    public void deleteById(int Id) {
        Session session = manager.unwrap(Session.class);
        Shelter shelter = session.get(Shelter.class,Id);
        session.delete(shelter);
    }
}
