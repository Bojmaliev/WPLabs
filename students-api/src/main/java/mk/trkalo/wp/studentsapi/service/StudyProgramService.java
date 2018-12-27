package mk.trkalo.wp.studentsapi.service;

import mk.trkalo.wp.studentsapi.model.StudyProgram;

import java.util.List;
public interface StudyProgramService {
    List<StudyProgram> findAllStudyPrograms();
    StudyProgram findById(Long id);
    StudyProgram addNew(StudyProgram studyProgram);
    void delete(Long index);
    StudyProgram updateStudyProgram(StudyProgram s);

}
