package mk.trkalo.wp.studentsapi.service.impl;

import mk.trkalo.wp.studentsapi.model.Student;
import mk.trkalo.wp.studentsapi.model.exceptions.InvalidStudentIndexException;
import mk.trkalo.wp.studentsapi.model.exceptions.StudentAlreadyExistsException;
import mk.trkalo.wp.studentsapi.model.exceptions.StudentNotFoundException;
import mk.trkalo.wp.studentsapi.persistence.StudentRepository;
import mk.trkalo.wp.studentsapi.service.StudentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl implements StudentService {
    private final StudentRepository repository;

    public StudentServiceImpl(StudentRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    @Override
    public Student getStudentsByIndex(int id)  {
        return repository.getStudentById(id);
    }

    @Override
    public Student addNew(Student student)  {
        if(!student.index.matches("^[0-9]{6}$")) throw new InvalidStudentIndexException();
        return repository.save(student);
    }

    @Override
    public List<Student> getStudentsByStudyProgram(int index) {
        return repository.findAll().stream().filter(a-> a.studyProgram.id==index).collect(Collectors.toList());
    }

}
