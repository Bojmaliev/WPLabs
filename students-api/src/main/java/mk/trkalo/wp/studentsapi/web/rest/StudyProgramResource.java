package mk.trkalo.wp.studentsapi.web.rest;

import mk.trkalo.wp.studentsapi.model.StudyProgram;
import mk.trkalo.wp.studentsapi.service.StudyProgramService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping(value = "/study_programs", produces = MediaType.APPLICATION_JSON_VALUE)
public class StudyProgramResource {
    private final StudyProgramService studyProgramService;

    @Autowired
    public StudyProgramResource(StudyProgramService studyProgramService) {
        this.studyProgramService = studyProgramService;
    }

    @GetMapping
    public List<StudyProgram> listStudyPrograms(){
        return studyProgramService.findAllStudyPrograms();
    }
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void addNew(@RequestBody StudyProgram task) {
        StudyProgram task1 = studyProgramService.addNew(task);
    }
    @DeleteMapping("/{index}")
    public void delete(@PathVariable("index") int index) {
        studyProgramService.delete(index);

    }
}
