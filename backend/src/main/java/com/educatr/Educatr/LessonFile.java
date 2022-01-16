package com.educatr.Educatr;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document
public class LessonFile {

  @Id
  public String id;
  public String authorId;
  public String fileName;
  public String fileContents;
  public ArrayList<String> subjects;
  public ArrayList<MCQuestion> questions;

  public LessonFile(String fileName , String fileContents) {
    this.fileName = fileName;
    this.fileContents = fileContents;
    this.subjects = new ArrayList<>();
    this.questions = new ArrayList<>();
  }

  public boolean addquestion(MCQuestion question){
    return questions.add(question);
  }

  public boolean addSubject(String newClass){
    if(!subjects.contains(newClass)){
      return this.subjects.add(newClass);

    }
    return false;
  }

  public boolean removeSubject(String removeClass){
    for(int i = 0; i < subjects.size(); i++){
      if(subjects.get(i).equals(removeClass)){
        subjects.remove(i);
        return true;
      }
    }
    return false;
  }

  @Override
  public String toString() {
    String subjectList = "";
    for(int i = 0; i < subjects.size(); i++){
      if(i != 0){
        subjectList += " , ";
      }
      subjectList += subjects.get(i);
    }

    String questionList = "";
    for(int i = 0; i < questions.size(); i++){
      if(i != 0){
        questionList += " , ";
      }
      questionList += questions.get(i).questionText;
    }

    return String.format(
        "LessonFile[id=%s, filename='%s', Subject list = '%s', Questions = '%s']",
        id, fileName, subjectList, questionList);
  }

}