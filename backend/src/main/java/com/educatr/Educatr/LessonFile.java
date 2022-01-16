package com.educatr.Educatr;


import org.springframework.data.annotation.Id;
import java.util.ArrayList;


public class LessonFile {

  @Id
  private String id;

  public String fileName;
  //public File contentsOfLesson;
  private String fileContents;
  private ArrayList<String> classes;
  private String classlist = "";

  public LessonFile() {}

  public LessonFile(String fileName //, File contentsOfLesson
                    , String fileContents) {
    this.fileName = fileName;
    //this.contentsOfLesson = contentsOfLesson;
    this.fileContents = fileContents;
    this.classes = new ArrayList<>();

  }

  public boolean addtoclass(String newClass){
    if(!classes.contains(newClass)){
      return this.classes.add(newClass);

    }
    return false;
  }

  public ArrayList<String> getclasses(){
    return new ArrayList<String>(classes);
  }

  public boolean removeclass(String removeClass){
    for(int i = 0; i < classes.size();i++){
      if(classes.get(i).equals(removeClass)){
        classes.remove(i);
        return true;
      }
    }
    return false;
  }

  @Override
  public String toString() {
    String classlist = "";
    for(int i = 0; i < classes.size(); i++){
      if(i != 0){
        classlist += " , ";
      }
      classlist += classes.get(i);
    }

    return String.format(
        "LessonFile[id=%s, filename='%s', classlist = '%s']",
        id, fileName, classlist);
  }

}