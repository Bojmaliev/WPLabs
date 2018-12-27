package mk.trkalo.wp.studentsapi.service.impl;

import mk.trkalo.wp.studentsapi.model.StudyProgram;
import mk.trkalo.wp.studentsapi.model.exceptions.FormValidationFailedException;
import mk.trkalo.wp.studentsapi.model.exceptions.StudyProgramAlreadyExists;
import mk.trkalo.wp.studentsapi.model.exceptions.StudyProgramNotFoundException;
import mk.trkalo.wp.studentsapi.persistence.StudyProgramRepository;
import mk.trkalo.wp.studentsapi.service.StudyProgramService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class StudyProgramServiceImpl implements StudyProgramService {
    private final StudyProgramRepository studyProgramRepository;

    public StudyProgramServiceImpl(StudyProgramRepository studyProgramRepository) {
        this.studyProgramRepository = studyProgramRepository;
    }


    @Override
    public List<StudyProgram> findAllStudyPrograms() {
        return studyProgramRepository.findAll();
    }

    @Override
    public StudyProgram findById(Long id) {
        if(id == null) throw new StudyProgramNotFoundException();
        return studyProgramRepository.findById(id).orElseThrow(StudyProgramNotFoundException::new);
    }

    @Override
    public StudyProgram addNew(StudyProgram studyProgram) {
        int size  = studyProgramRepository.findAllByName(studyProgram.name).size();

        if(size != 0) throw new StudyProgramAlreadyExists();

        return studyProgramRepository.saveAndFlush(studyProgram);
    }

    @Override
    public void delete(Long index) {
        if(index== null)throw new FormValidationFailedException();
        StudyProgram sp = studyProgramRepository.findById(index).orElseThrow(StudyProgramNotFoundException::new);
        if(sp.students.size() != 0)throw new FormValidationFailedException();

        studyProgramRepository.deleteById(index);
    }

    @Override
    public StudyProgram updateStudyProgram(StudyProgram s) {
        StudyProgram da = studyProgramRepository.findById(s.id).get();
        if(s.name == null) throw new FormValidationFailedException();
        da.name = s.name;

        return studyProgramRepository.saveAndFlush(da);
    }
}
