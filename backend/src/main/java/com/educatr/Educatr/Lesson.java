package com.educatr.Educatr;

import org.springframework.data.annotation.Id;


public class Lesson {

  @Id
  public String id;



  public Lesson() {}

  public Customer(String firstName, String lastName, String userEmail, String userName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userEmail = userEmail;
    this.userName = userName;
  }

  @Override
  public String toString() {
    return String.format(
        "Customer[id=%s, firstName='%s', lastName='%s', userEmail = '%s', userName = '%s']",
        id, firstName, lastName , userEmail , userName );
  }

}