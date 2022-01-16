package com.educatr.Educatr;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LessonFileRepository extends MongoRepository<LessonFile, String>{
//public interface CustomerRepository extends LessonFileRepository<Customer, String> {

    public List<LessonFile> findBySubjects(String subject);
    public LessonFile findByFileName(String fileName);
    //public List<LessonFile> findByLastName(String lastName);
    //public LessonFile findByContentsOfLesson(File contentsOfLesson);

}
