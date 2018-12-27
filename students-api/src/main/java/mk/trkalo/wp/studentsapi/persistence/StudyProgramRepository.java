package mk.trkalo.wp.studentsapi.persistence;

import mk.trkalo.wp.studentsapi.model.StudyProgram;
import mk.trkalo.wp.studentsapi.model.exceptions.StudyProgramAlreadyExists;
import mk.trkalo.wp.studentsapi.model.exceptions.StudyProgramNotFoundException;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudyProgramRepository extends JpaRepository<StudyProgram, Long> {

   List<StudyProgram> findAllByName(String name);

}
