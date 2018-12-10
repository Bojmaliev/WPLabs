package mk.trkalo.wp.studentsapi.service;

import mk.trkalo.wp.studentsapi.model.StudyProgram;

import java.util.List;
public interface StudyProgramService {
    List<StudyProgram> findAllStudyPrograms();
    StudyProgram findStudyProgramByName(String name);
    StudyProgram addNew(StudyProgram studyProgram);
    StudyProgram delete(int index);

}
