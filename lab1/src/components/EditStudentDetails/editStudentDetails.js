import React,{Component} from "react";

class editStudentDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            index:-1,
            student:null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillReceiveProps(props){
        this.setState({student:props.student, index:props.index});
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
    }

    render(){

        if(this.state.student != null)
        return (
            <form onSubmit={this.handleSubmit} >
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