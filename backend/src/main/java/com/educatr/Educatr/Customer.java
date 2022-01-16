package com.educatr.Educatr;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.ArrayList;

public class Customer{

  @Id
  public String id;

  public String firstName;
  public String lastName;
  public String userEmail;
  public String userName;
  @DBRef
  public ArrayList<LessonFile> lessons;
  public ArrayList<Courses> courses;


  public Customer(String firstName, String lastName, String userEmail, String userName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userEmail = userEmail;
    this.userName = userName;
    this.lessons = new ArrayList<>();
    this.courses = new ArrayList<>();
  }

  public boolean addlesson(LessonFile newLesson){
    if(!lessons.contains(newLesson)){
      return this.lessons.add(newLesson);
    }
    return false;
  }

  public boolean addcourse(Courses course){
    if(!courses.contains(course)){
      return this.courses.add(course);
    }
    return false;
  }

  public boolean removeclass(LessonFile removeLesson){
    for(int i = 0; i < lessons.size();i++){
      if(lessons.get(i).equals(removeLesson)){
        lessons.remove(i);
        return true;
      }
    }
    return false;
  }

  @Override
  public String toString() {
    String lessonlist = "";
    for(int i = 0; i < lessons.size(); i++){
      if(i != 0){
        lessonlist += " , ";
      }
      lessonlist += lessons.get(i).fileName;
    }

    String courselist = "";
    for(int i = 0; i < courses.size(); i++){
      if(i != 0){
        courselist += " , ";
      }
      courselist += courses.get(i).courseName;
    }

    return String.format(

        "Customer[id=%s, firstName='%s', lastName='%s', userEmail = '%s', userName = '%s' " +
                "lessons = '%s' , courses = '%s' ]",
        id, firstName, lastName , userEmail , userName, lessonlist, courselist );
  }

}