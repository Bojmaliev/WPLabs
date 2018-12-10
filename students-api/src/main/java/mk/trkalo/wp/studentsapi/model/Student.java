package mk.trkalo.wp.studentsapi.model;


import javax.persistence.*;

@Entity
public class Student {
    @Id
    @Column(name="id")
    public String index;
    public String name;
    public String lastName;
    @ManyToOne
    public StudyProgram studyProgram;
}
