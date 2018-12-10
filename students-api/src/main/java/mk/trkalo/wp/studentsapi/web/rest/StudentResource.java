package mk.trkalo.wp.studentsapi.web.rest;

import com.fasterxml.jackson.databind.ObjectMapper;
import mk.trkalo.wp.studentsapi.model.PostNewStudent;
import mk.trkalo.wp.studentsapi.model.Student;
import mk.trkalo.wp.studentsapi.model.StudentInList;
import mk.trkalo.wp.studentsapi.model.exceptions.StudentNotFoundException;
import mk.trkalo.wp.studentsapi.service.StudentService;
import mk.trkalo.wp.studentsapi.service.StudyProgramService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.stream.Collectors;

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
    public List<StudentInList> getStudents() {
        return studentService.getAllStudents()
                .stream()
                .map(a->{
                    StudentInList s = new StudentInList();
                    s.index = a.index;
                    s.lastName = a.lastName;
                    s.name = a.name;
                    return s;
                }).collect(Collectors.toList());
    }


    @GetMapping("/all")
    public List<StudentInList> getAllStudents() {
        return getStudents();
    }
    @GetMapping("/{index}")
    public Student getStudentByIndex(@PathVariable("index") String index) {
        return studentService.getStudentsByIndex(index);
    }
    @GetMapping("/by_study_program/{index}")
    public List<Student> getStudentsByStudyProgram(@PathVariable("index") Long index){

        return studentService.getStudentsByStudyProgram(index);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Student addNew(@RequestBody PostNewStudent student)  {
        Student s = new Student();
        s.studyProgram = studyProgramService.findStudyProgramByName(student.studyProgramName);
        s.index=student.index;
        s.name = student.name;
        s.lastName = student.lastName;
        return studentService.addNew(s);
    }
    @DeleteMapping("/{index}")
    public void delete(@PathVariable("index") String index) {
        studentService.delete(index);

    }

    @ResponseStatus(HttpStatus.CREATED)
    @PatchMapping("/{index}")
    public Student updateStudent(@RequestBody PostNewStudent student, @PathVariable String index, HttpServletResponse res){
        Student s = studentService.getStudentsByIndex(index);
        if(student.studyProgramName != null)s.studyProgram = studyProgramService.findStudyProgramByName(student.studyProgramName);
        if(student.name != null) s.name = student.name;
        if(student.lastName != null) s.lastName = student.lastName;
        res.setHeader("Location", "students/"+student.index);
        return s;
    }


}
