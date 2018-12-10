package mk.trkalo.wp.studentsapi.persistence.impl;

import mk.trkalo.wp.studentsapi.model.Student;
import mk.trkalo.wp.studentsapi.model.exceptions.StudentAlreadyExistsException;
import mk.trkalo.wp.studentsapi.model.exceptions.StudentNotFoundException;
import mk.trkalo.wp.studentsapi.persistence.StudentRepository;
import mk.trkalo.wp.studentsapi.persistence.StudyProgramRepository;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Repository
public class StudentRepositoryImpl implements StudentRepository {
    private static List<Student> students;
    private final StudyProgramRepository studyProgramRepository;

    public StudentRepositoryImpl(StudyProgramRepository studyProgramRepository) {
        this.studyProgramRepository = studyProgramRepository;
    }

    @PostConstruct
    public void init() {
        Student s1 = new Student();
        s1.name = "Martin";
        s1.lastName="Bojmaliev";
        s1.index="163099";
        s1.studyProgram = studyProgramRepository.getStudyProgramById(0);
        Student s2 = new Student();
        s2.name = "Petar";
        s2.lastName="Boskovski";
        s2.index="163048";
        s2.studyProgram = studyProgramRepository.getStudyProgramById(1);
        Student s3 = new Student();
        s3.name = "Janaki";
        s3.lastName="Bajatovski";
        s3.index="163034";
        s3.studyProgram = studyProgramRepository.getStudyProgramById(2);
        Student s4 = new Student();
        s4.name = "Filip";
        s4.lastName="Kjamilov";
        s4.index="163190";
        s4.studyProgram = studyProgramRepository.getStudyProgramById(2);
        students = Stream.of(s1, s2, s3, s4).collect(Collectors.toList());

    }

    @Override
    public List<Student> findAll() {
        return students;
    }

    @Override
    public Student getStudentById(int id)   {
        return students.stream().filter(a->a.index.equals(String.valueOf(id))).findFirst().orElseThrow(StudentNotFoundException::new);

    }

    @Override
    public Student save(Student student) {
        long howMuch = students.stream().filter(a->a.index.equals(student.index)).count();
        if(howMuch!=0)throw new StudentAlreadyExistsException();
        students.add(student);
        return student;
    }

    @Override
    public Student deleteById(int id) {
        Student s = students
                .stream()
                .filter(a->a.index.equals(String.valueOf(id)))
                .findFirst().orElseThrow(StudentNotFoundException::new);
        return students.remove(students.indexOf(s));
    }

}
