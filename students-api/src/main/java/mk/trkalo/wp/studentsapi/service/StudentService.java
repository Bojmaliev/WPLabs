package mk.trkalo.wp.studentsapi.service;

import mk.trkalo.wp.studentsapi.model.Student;

import java.util.List;

public interface StudentService {
    List<Student> getAllStudents();
    Student getStudentsByIndex(String index);
    Student addNew(Student student);
    void delete(String index);
    List<Student> getStudentsByStudyProgram(Long index);
}
