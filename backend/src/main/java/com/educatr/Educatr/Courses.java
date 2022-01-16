package com.educatr.Educatr;

import java.util.ArrayList;
import org.springframework.data.annotation.Id;

public class Courses{

    @Id
    public String id;

    public String courseName;
    public ArrayList<LessonFile> lessonsContained;

    public Courses() {}

    public Courses(String name){
        this.courseName = name;
        lessonsContained = new ArrayList<>();
    }

    public Courses(String name, ArrayList<LessonFile> lessons){
        this.courseName = name;
        lessonsContained = new ArrayList<>();
        for(int i = 0; i < lessons.size(); i++){
            lessonsContained.add(lessons.get(i));
        }
    }

    public Courses(String name, LessonFile lesson){
        this.courseName = name;
        lessonsContained = new ArrayList<>();
        lessonsContained.add(lesson);
    }

    @Override
    public String toString() {
        String lessonlist = "";
        for(int i = 0; i < lessonsContained.size(); i++){
            if(i != 0){
                lessonlist += " , ";
            }
            lessonlist += lessonsContained.get(i).fileName;
        }
        return String.format(
                "Customer[id=%s , Course name = '%s' " +
                        "lessons = '%s']",
                id, courseName ,lessonlist );
    }

}