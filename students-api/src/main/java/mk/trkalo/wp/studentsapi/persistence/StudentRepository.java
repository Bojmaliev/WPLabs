package mk.trkalo.wp.studentsapi.persistence;

import mk.trkalo.wp.studentsapi.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, String> {

}
