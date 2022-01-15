package com.educatr.Educatr;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomerRepository extends MongoRepository<Customer, String> {

  public Customer findByFirstName(String firstName);
  public List<Customer> findByLastName(String lastName);
  public Customer findByUserName(String userName);
  public Customer findByEmail(String userEmail);
  
}