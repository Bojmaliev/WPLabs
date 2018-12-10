package mk.trkalo.wp.studentsapi.service.impl;

import mk.trkalo.wp.studentsapi.model.Student;
import mk.trkalo.wp.studentsapi.model.exceptions.InvalidStudentIndexException;
import mk.trkalo.wp.studentsapi.model.exceptions.StudentAlreadyExistsException;
import mk.trkalo.wp.studentsapi.model.exceptions.StudentNotFoundException;
import mk.trkalo.wp.studentsapi.model.exceptions.StudyProgramNotFoundException;
import mk.trkalo.wp.studentsapi.persistence.StudentRepository;
import mk.trkalo.wp.studentsapi.persistence.StudyProgramRepository;
import mk.trkalo.wp.studentsapi.service.StudentService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {
    private final StudentRepository repository;
    private final StudyProgramRepository studyProgramRepository;

    public StudentServiceImpl(StudentRepository repository, StudyProgramRepository studyProgramRepository) {
        this.repository = repository;
        this.studyProgramRepository = studyProgramRepository;
    }

    @Override
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    @Override
    public Student getStudentsByIndex(String index)  {
        return repository.findById(index).orElseThrow(StudentNotFoundException::new);
    }

    @Override
    public Student addNew(Student student)  {
        if(!student.index.matches("^[0-9]{6}$")) throw new InvalidStudentIndexException();
        if(repository.existsById(student.index))throw new StudentAlreadyExistsException();
        return repository.saveAndFlush(student);
    }

    @Override
    public void delete(String index) {
        repository.deleteById(index);
    }

    @Override
    public List<Student> getStudentsByStudyProgram(Long index) {
        return studyProgramRepository.findById(index).orElseThrow(StudyProgramNotFoundException::new).students;
    }


}
