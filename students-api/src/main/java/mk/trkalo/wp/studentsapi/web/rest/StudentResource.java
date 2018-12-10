package mk.trkalo.wp.studentsapi.web.rest;

import com.fasterxml.jackson.databind.ObjectMapper;
import mk.trkalo.wp.studentsapi.model.PostNewStudent;
import mk.trkalo.wp.studentsapi.model.Student;
import mk.trkalo.wp.studentsapi.model.exceptions.StudentNotFoundException;
import mk.trkalo.wp.studentsapi.service.StudentService;
import mk.trkalo.wp.studentsapi.service.StudyProgramService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping(value = "/students", produces = MediaType.APPLICATION_JSON_VALUE)
public class StudentResource {
    private final StudentService studentService;
    private final StudyProgramService studyProgramService;

    @Autowired
    public StudentResource(StudentService studentService, StudyProgramService studyProgramService) {
        this.studentService = studentService;
        this.studyProgramService = studyProgramService;
    }

    @GetMapping
    public List<Student> getStudents() {
        return studentService.getAllStudents();
    }


    @GetMapping("/all")
    public List<Student> getAllStudents() {
        return getStudents();
    }
    @GetMapping("/{index}")
    public Student getStudentByIndex(@PathVariable("index") int index) throws StudentNotFoundException {
        return studentService.getStudentsByIndex(index);
    }
    @GetMapping("/by_study_program/{index}")
    public List<Student> getStudentsByStudyProgram(@PathVariable("index") int index){
        return studentService.getStudentsByStudyProgram(index);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void addNew(@RequestBody PostNewStudent student, HttpServletResponse response)  {
        Student s = new Student();
        s.studyProgram = studyProgramService.findStudyProgramByName(student.studyProgramName);
        s.index=student.index;
        s.name = student.name;
        s.lastName = student.lastName;
        studentService.addNew(s);
        response.setHeader("Location", "/students/" + student.index);
    }


}
