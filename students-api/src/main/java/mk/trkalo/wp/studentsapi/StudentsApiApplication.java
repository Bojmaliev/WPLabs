package mk.trkalo.wp.studentsapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@ServletComponentScan
@SpringBootApplication
public class StudentsApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentsApiApplication.class, args);
	}
}
