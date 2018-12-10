package mk.trkalo.wp.studentsapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class StudyProgram {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    public String name;

    @OneToMany(mappedBy = "studyProgram")
    @JsonIgnore
    public List<Student> students;
}
