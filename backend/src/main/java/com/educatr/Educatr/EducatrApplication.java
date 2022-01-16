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

}

