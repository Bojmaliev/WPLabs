package mk.trkalo.wp.studentsapi.persistence;

import mk.trkalo.wp.studentsapi.model.Student;

import java.util.List;

public interface StudentRepository {
    List<Student> findAll();
    Student getStudentById(int id) ;
    Student save(Student student);
    Student deleteById(int id);
}
