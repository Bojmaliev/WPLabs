package mk.trkalo.wp.studentsapi.service.impl;

import mk.trkalo.wp.studentsapi.model.StudyProgram;
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
    public StudyProgram findStudyProgramByName(String name) {
        return studyProgramRepository.findAll()
                .stream()
                .filter(studyProgram -> studyProgram.name.equals(name))
                .findFirst()
                .orElseThrow(StudyProgramNotFoundException::new);
    }

    @Override
    public StudyProgram addNew(StudyProgram studyProgram) {
        boolean exists = studyProgramRepository.findAll().stream().anyMatch(a->a.name.equals(studyProgram.name));
        if(exists) throw new StudyProgramAlreadyExists();

        return studyProgramRepository.saveAndFlush(studyProgram);
    }

    @Override
    public void delete(Long index) {
        studyProgramRepository.deleteById(index);
    }
}
