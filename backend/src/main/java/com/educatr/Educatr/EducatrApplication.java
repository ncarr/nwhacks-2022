package com.educatr.Educatr;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
//import java.io.File;

@SpringBootApplication
public class EducatrApplication implements CommandLineRunner {

	@Autowired
  	private LessonFileRepository repository;
	@Autowired
	private CustomerRepository customerRepository;
	//private LessonFileRepository lessonRepository;

	public static void main(String[] args) {
		SpringApplication.run(EducatrApplication.class, args);
	}

	@Override
  	public void run(String... args) throws Exception {


		repository.deleteAll();
		customerRepository.deleteAll();

		/*

		LessonFile calc = new LessonFile("Calc" , "JSONSTUFF HERE Calc");
		LessonFile engl = new LessonFile("English" , "JSONSTUFF HERE English");

		MCQuestion addition = new MCQuestion("What is 1+1?");

		calc.addquestion(addition);

		calc.addSubject("Math");
		engl.addSubject("English");

		repository.save(calc);
		repository.save(engl);


		System.out.println("Customer found with findByFileName('Calc'):");
		System.out.println("--------------------------------");
		System.out.println(repository.findByFileName("Calc"));
		System.out.println("");


		calc.addSubject("Calculus");

		repository.save(calc);



		for (LessonFile lesson : repository.findAll()) {
			System.out.println(lesson);
		}
		System.out.println();




		Courses history = new Courses("History");
		Courses science = new Courses("Science");
		Courses APCalc = new Courses("AP CALC", calc);

		// save a couple of customers

		Customer alice = new Customer("Alice", "Smith","alice@gmail.com","AliceS");
		Customer bob = new Customer("Bob", "Smith", "bob@gmail.com", "BobS");

		alice.addlesson(calc);
		alice.addcourse(APCalc);
		alice.addcourse(history);
		bob.addlesson(engl);
		bob.addcourse(science);

		customerRepository.save(alice);
		customerRepository.save(bob);


		// fetch all customers
		System.out.println("Customers found with findAll():");
		System.out.println("-------------------------------");
		for (Customer customer : customerRepository.findAll()) {
			System.out.println(customer);
		}
		System.out.println();




		// fetch an individual customer
		System.out.println("Customer found with findByFirstName('Alice'):");
		System.out.println("--------------------------------");
		System.out.println(customerRepository.findByFirstName("Alice"));
		System.out.println();

		System.out.println("Customers found with findByLastName('Smith'):");
		System.out.println("--------------------------------");
		for (Customer customer : customerRepository.findByLastName("Smith")) {
			System.out.println(customer);
		}
		System.out.println();

		System.out.println("Customer found with findByUserName('AliceS'):");
		System.out.println("--------------------------------");
		System.out.println(customerRepository.findByUserName("AliceS"));
		System.out.println();

		System.out.println("Customer found with findByUserEmail('bob@gmail.com'):");
		System.out.println("--------------------------------");
		System.out.println(customerRepository.findByUserEmail("bob@gmail.com"));
		System.out.println();


		 */
  	}

}

