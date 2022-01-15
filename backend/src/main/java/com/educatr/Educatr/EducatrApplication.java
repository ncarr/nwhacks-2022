package com.educatr.Educatr;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

@SpringBootApplication
public class EducatrApplication implements CommandLineRunner {

	@Autowired
  	private CustomerRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(EducatrApplication.class, args);
	}

	@Override
  	public void run(String... args) throws Exception {

		repository.deleteAll();

		// save a couple of customers
		repository.save(new Customer("Alice", "Smith","alice@gmail.com","AliceS"));
		repository.save(new Customer("Bob", "Smith", "bob@gmail.com", "BobS"));

		// fetch all customers
		System.out.println("Customers found with findAll():");
		System.out.println("-------------------------------");
		for (Customer customer : repository.findAll()) {
		System.out.println(customer);
		}
		System.out.println();

		// fetch an individual customer
		System.out.println("Customer found with findByFirstName('Alice'):");
		System.out.println("--------------------------------");
		System.out.println(repository.findByFirstName("Alice"));

		System.out.println("Customers found with findByLastName('Smith'):");
		System.out.println("--------------------------------");
		for (Customer customer : repository.findByLastName("Smith")) {
			System.out.println(customer);
		}

		System.out.println("Customer found with findByUserName('AliceS'):");
		System.out.println("--------------------------------");
		System.out.println(repository.findByUserName("AliceS"));

		System.out.println("Customer found with findByUserEmail('bob@gmail.com'):");
		System.out.println("--------------------------------");
		System.out.println(repository.findByUserEmail("bob@gmail.com"));

  	}
}
