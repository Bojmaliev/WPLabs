import React, { Component } from 'react';
import './App.css';
import StudentsList from "../StudentsList/studentsList"
import StudyProgramsList from "../StudyProgramsList/studyProgramsList"
import EditStudentDetails from "../EditStudentDetails/editStudentDetails"
import EditStudyProgram from "../EditStudyProgram/editStudyProgram"
import {listStudents} from "../../repository/studentRepository"
import AddNewStudent from "../AddNewStudent/addNewStudent"
import CreateNewStudyProgram from "../CreateNewStudyProgram/createNewStudyProgram"
import ViewStudentDetails from "../ViewStudentDetails/viewStudentDetails"
import { BrowserRouter as Router, Route } from "react-router-dom";
import {listStudyPrograms} from "../../repository/studyProgramRepository";

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            listStudents:[],
            listStudyPrograms:[]
        };
    }
    componentDidMount(){
        this.loadStudents();
        this.loadStudyProgramsHere();
    }
    loadStudents = () =>{
        listStudents().then(function (res) {
            return res.json();
        }).then((res) =>{
            this.setState({
                listStudents:res
            });
        });
    };
    loadStudyProgramsHere =() =>{
        listStudyPrograms()
            .then(function(res){return res.json()})
            .then((res) => this.setState({listStudyPrograms:res}));
    };
  render() {
    return (
        <Router>
            <div>
            <Route exact path="/" render={()=>
                <><StudentsList finish={this.loadStudents} students={this.state.listStudents}/>
                <StudyProgramsList finish={this.loadStudyProgramsHere} studyPrograms={this.state.listStudyPrograms}/></>
            } />
            <Route path="/newStudent" render={(props)=><AddNewStudent {...props} studyPrograms={this.state.listStudyPrograms} finish={this.loadStudents}/>} />
                <Route path="/newStudyProgram" render={(props)=><CreateNewStudyProgram {...props} finish={this.loadStudyProgramsHere}/>} />

            <Route path="/editStudent/:index" render={(props)=><EditStudentDetails finish={this.loadStudents} {...props} studyPrograms={this.state.listStudyPrograms}/>} />
                <Route path="/editStudyProgram/:index" render={(props)=><EditStudyProgram finish={this.loadStudyProgramsHere} {...props}/>} />
            <Route path="/viewStudentDetails/:index" render={(props)=><ViewStudentDetails finish={this.loadStudents} {...props}/>} />
            </div>
        </Router>
    );
  }
}

export default App;
