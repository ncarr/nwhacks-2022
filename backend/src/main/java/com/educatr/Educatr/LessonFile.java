package com.educatr.Educatr;

import org.springframework.data.annotation.Id;
import java.util.ArrayList;

public class LessonFile {

  @Id
  public String id;

  public String fileName;
  public String fileContents;
  public ArrayList<String> subjects;

  public LessonFile(String fileName , String fileContents) {
    this.fileName = fileName;
    this.fileContents = fileContents;
    this.subjects = new ArrayList<>();
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

    return String.format(
        "LessonFile[id=%s, filename='%s', Subject list = '%s']",
        id, fileName, subjectList);
  }

}