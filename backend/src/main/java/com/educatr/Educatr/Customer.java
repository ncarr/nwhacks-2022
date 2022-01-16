package com.educatr.Educatr;

import org.springframework.data.annotation.Id;
import java.util.ArrayList;

public class Customer{

  @Id
  private String id;

  private String firstName;
  private String lastName;
  private String userEmail;
  private String userName;
  private ArrayList<LessonFile> lessons;

  public Customer() {}

  public Customer(String firstName, String lastName, String userEmail, String userName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userEmail = userEmail;
    this.userName = userName;
    this.lessons = new ArrayList<>();
  }

  public boolean addlesson(LessonFile newLesson){
    if(!lessons.contains(newLesson)){
      return this.lessons.add(newLesson);
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
    return String.format(
        "Customer[id=%s, firstName='%s', lastName='%s', userEmail = '%s', userName = '%s' " +
                "lessons = '%s']",
        id, firstName, lastName , userEmail , userName, lessonlist );
  }


}