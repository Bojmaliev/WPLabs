import React, { Component } from 'react';
import './App.css';
import StudentsList from "../StudentsList/studentsList"
import EditStudentDetails from "../EditStudentDetails/editStudentDetails"
import {listStudents} from "../../repository/studentRepository"
import AddNewStudent from "../AddNewStudent/addNewStudent"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            listStudents:listStudents(),
            studentToEdit:null,
            editIndex:-1
        };
    }
    editStudent = (index) =>{
        this.setState((prevState) =>({
            studentToEdit:prevState.listStudents[index],
            editIndex:index
        }));

    };
    handleChangedStudent = (event) =>{
        this.setState({studentToEdit:null,editIndex:-1});
        let newStudents = [...this.state.listStudents];
        newStudents[event.index] = event.student;
        this.setState({listStudents:newStudents});

    };
    deleteStudent = (index) =>{

        let newStudents = [...this.state.listStudents];
        newStudents.splice(index, 1);
        this.setState({listStudents:newStudents});

    };
    addStudent = (student)=>{
        let newStudents = [...this.state.listStudents];
        newStudents.push(student);
        this.setState({listStudents:newStudents});
    };
  render() {
    return (
        <Router>
            <div>
            <Link to="/">Home</Link>
            <Link to="/newStudent">Add Student</Link>

                {/*<EditStudentDetails handleChangedStudent={this.handleChangedStudent} student={this.state.studentToEdit} index={this.state.editIndex}/>*/}
            <Route exact path="/" render={()=><StudentsList deleteStudent={this.deleteStudent} editStudent={this.editStudent} students={this.state.listStudents}/>} />
            <Route path="/newStudent" render={()=><AddNewStudent addStudent={this.addStudent}/>} />
            </div>
        </Router>
    );
  }
}

export default App;
