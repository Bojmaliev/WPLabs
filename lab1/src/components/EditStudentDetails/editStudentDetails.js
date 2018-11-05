import React,{Component} from "react";
import {Redirect} from "react-router-dom";

class editStudentDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            index:props.index,
            student:props.student,
            redirectTo:null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const newStudent = this.state.student;
        newStudent[event.target.name] = event.target.value;
        this.setState({
            student: newStudent
        });
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.handleChangedStudent(this.state);
        this.setState({redirectTo:"/"});
    }

    render(){
        let redirect ="";
        if(this.state.redirectTo != null)
            redirect =  <Redirect to={{ pathname: this.state.redirectTo }} />;

        if(this.state.student != null)
        return (

            <form onSubmit={this.handleSubmit} >
                {redirect}
            <table>
                <tbody>
                <tr><td>Ime:</td><td><input type="text" name="firstName" value={this.state.student.firstName} onChange={this.handleChange}/></td></tr>
                <tr><td>Prezime:</td><td><input type="text" name="lastName" value={this.state.student.lastName} onChange={this.handleChange}/></td></tr>
                <tr><td>Index:</td><td><input type="text"  name="index" value={this.state.student.index} onChange={this.handleChange}/></td></tr>
                <tr><td>Program:</td><td><input type="text" name="program" value={this.state.student.program} onChange={this.handleChange}/></td></tr>
                <tr><td><input type="submit" value="Submit"/> </td></tr>
                </tbody>
            </table>
            </form>
        );
        return "";
    }

}


export default editStudentDetails;