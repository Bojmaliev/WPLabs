package mk.trkalo.wp.studentsapi.service;

import mk.trkalo.wp.studentsapi.model.Student;

import java.util.List;

public interface StudentService {
    List<Student> getAllStudents();
    Student getStudentsByIndex(int index);
    Student addNew(Student student);
    void delete(int index);
    List<Student> getStudentsByStudyProgram(int index);
}
