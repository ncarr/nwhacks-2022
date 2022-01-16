package com.educatr.Educatr.web;

import java.util.List;

import com.educatr.Educatr.Customer;
import com.educatr.Educatr.CustomerRepository;
import com.educatr.Educatr.LessonFile;
import com.educatr.Educatr.LessonFileRepository;
import com.educatr.Educatr.LessonInput;
import com.educatr.Educatr.model.Message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Handles requests to "/api" endpoints.
 * 
 * @see com.auth0.example.security.SecurityConfig to see how these endpoints are
 *      protected.
 */
@RestController
@RequestMapping(path = "api", produces = MediaType.APPLICATION_JSON_VALUE)
// For simplicity of this sample, allow all origins. Real applications should
// configure CORS for their use case.
@CrossOrigin(origins = "*")
public class APIController {

    @Autowired
    private LessonFileRepository repository;
    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping(value = "/public")
    public Message publicEndpoint() {
        return new Message("All good. You DO NOT need to be authenticated to call /api/public.");
    }

    @GetMapping(value = "/private")
    public Message privateEndpoint() {
        return new Message("All good. You can see this because you are Authenticated.");
    }

    @GetMapping(value = "/private-scoped")
    public Message privateScopedEndpoint() {
        return new Message(
                "All good. You can see this because you are Authenticated with a Token granted the 'read:messages' scope");
    }

    @GetMapping(value = "/lessons")
    public List<LessonFile> findAllLessons() {
        return repository.findAll();
    }

    @GetMapping(value = "/lessons/{lesson}")
    public LessonFile findLessonById(@PathVariable("lesson") String lesson) {
        return repository.findById(lesson).get();
    }

    @PostMapping(value = "/lessons")
    public LessonFile createLesson(@RequestBody LessonInput input) {
        input.lesson.id = null;
        input.lesson.authorId = input.authorId;
        Customer author = customerRepository.findById(input.authorId).get();
        author.addlesson(input.lesson);
        return repository.save(input.lesson);
    }

    @PatchMapping(value = "/lessons/{lesson}")
    public LessonFile updateLesson(@RequestBody LessonFile input, @PathVariable("lesson") String id) {
        input.id = id;
        return repository.save(input);
    }

    @GetMapping(value = "/subjects/{subject}")
    public List<LessonFile> findLessonsBySubject(@PathVariable("subject") String subject) {
        return repository.findBySubjects(subject);
    }

    @PatchMapping(value = "/users")
    public Customer patchUser(@RequestBody Customer input) {
        Customer customer = customerRepository.findById(input.id)
                .orElseGet(() -> new Customer(input.firstName, input.lastName, input.userEmail, null));
        customer.firstName = input.firstName;
        customer.lastName = input.lastName;
        customer.userEmail = input.userEmail;
        return customerRepository.save(input);
    }
}
