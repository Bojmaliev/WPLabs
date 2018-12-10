package mk.trkalo.wp.studentsapi.persistence;

import mk.trkalo.wp.studentsapi.model.StudyProgram;
import mk.trkalo.wp.studentsapi.model.exceptions.StudyProgramAlreadyExists;
import mk.trkalo.wp.studentsapi.model.exceptions.StudyProgramNotFoundException;

import java.util.List;

public interface StudyProgramRepository {
    List<StudyProgram> findAll();
    StudyProgram getStudyProgramById(int id);
    StudyProgram save(StudyProgram studyProgram);
    StudyProgram deleteById(int id);


}
