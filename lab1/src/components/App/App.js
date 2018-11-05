import React, { Component } from 'react';
import './App.css';
import StudentsList from "../StudentsList/studentsList"
import EditStudentDetails from "../EditStudentDetails/editStudentDetails"
import {listStudents} from "../../repository/studentRepository"


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

    }
  render() {
    return (
        <div>
            <StudentsList editStudent={this.editStudent} students={this.state.listStudents}/>
            <EditStudentDetails handleChangedStudent={this.handleChangedStudent} student={this.state.studentToEdit} index={this.state.editIndex}/>
        </div>
    );
  }
}

export default App;
