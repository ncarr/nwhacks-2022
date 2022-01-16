package com.educatr.Educatr;
import java.util.HashMap;

public class MCQuestion{

    public String questionText;
    public HashMap<String,Boolean> answers;

    public MCQuestion(){}

    public MCQuestion(String question){
        questionText = question;
    }

    public MCQuestion(String question, HashMap<String, Boolean> theanswers){
        questionText = question;
        for(String i : theanswers.keySet()){
            answers.put(i,theanswers.get(i));
        }
    }

    public boolean addAnswer(String answer, boolean isright){
        return answers.put(answer,isright);
    }

    public boolean removeAnswer(String answer){
        return answers.remove(answer);
    }



}