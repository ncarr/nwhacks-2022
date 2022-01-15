package com.educatr.Educatr;

import org.springframework.data.annotation.Id;


public class LessonFile {

  @Id
  public String id;


  public String fileName;
  public File contentsOfLesson;


  public LessonFile() {}

  public LessonFile(String fileName, File contentsOfLesson) {
    this.fileName = fikeName;
    this.contentsOfLesson = contentsOfLesson;
  }

  @Override
  public String toString() {
    return String.format(
        "Customer[id=%s, filename='%s']",
        id, fileName );
  }

}