package mk.trkalo.wp.studentsapi.persistence.impl;

import mk.trkalo.wp.studentsapi.model.StudyProgram;
import mk.trkalo.wp.studentsapi.model.exceptions.StudyProgramNotFoundException;
import mk.trkalo.wp.studentsapi.persistence.StudyProgramRepository;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Repository
public class StudyProgramRepositoryImpl implements StudyProgramRepository {
    private static List<StudyProgram> studyPrograms;


    @PostConstruct
    public void init(){
        StudyProgram s1 = new StudyProgram();
        s1.id=0L;
        s1.name = "PET";
        StudyProgram s2 = new StudyProgram();
        s2.id=1L;
        s2.name = "IKI";
        StudyProgram s3 = new StudyProgram();
        s3.id=2L;
        s3.name = "KNI";

        studyPrograms = Stream.of(s1,s2,s3).collect(Collectors.toList());

    }

    @Override
    public List<StudyProgram> findAll() {
        return studyPrograms;
    }

    @Override
    public StudyProgram getStudyProgramById(int id){
        return studyPrograms.get(id);
    }

    @Override
    public StudyProgram save(StudyProgram studyProgram){
        studyProgram.id = (long)studyPrograms.size();
        studyPrograms.add(studyProgram);
        return studyPrograms.get(studyPrograms.size() - 1);


    }

    @Override
    public StudyProgram deleteById(int id){
        if (id >= studyPrograms.size() || id < 0) {
            throw new StudyProgramNotFoundException();
        }
        return studyPrograms.remove(id);

    }
}
