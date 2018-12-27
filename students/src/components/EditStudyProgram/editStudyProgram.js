import React,{Component} from "react";
import {Link, Redirect} from "react-router-dom";
import {
    checkStatus,
    getStudentDetails,
    patchStudentDetails
} from "../../repository/studentRepository";
import Button from "react-bootstrap/es/Button";
import Table from "react-bootstrap/es/Table";
import Grid from "react-bootstrap/es/Grid";
import Alert from "react-bootstrap/es/Alert";
import {listStudyPrograms, patchStudyProgramDetails} from "../../repository/studyProgramRepository";

class editStudyProgram extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            id:0,
            redirectTo:null,
            message:"",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount () {
        const {index} = this.props.match.params;

        listStudyPrograms()
            .then(checkStatus)
            .then(function (res) {
                return res.json()
            })
            .then((res) => {
                this.setState({

                    name: res.filter(a => a.id == index)[0].name,
                    id: index
                })
            }).catch(error => {
            this.setState({message: <Alert bsStyle="warning">{error.message}</Alert>});
        });
    }

    handleChange(event){
        this.setState({
            name: event.target.value
        });
    }
    handleSubmit(event){
        event.preventDefault();
        patchStudyProgramDetails({name:this.state.name, id:this.state.id})
            .then(checkStatus)
            .then((response)=>{
                    this.props.finish();
                    this.setState({redirectTo: "/"});

            }).catch(error =>
            this.setState({message:<Alert bsStyle="warning">{error.message}</Alert>})
        );

    };

    render(){
        let redirect ="";
        if(this.state.redirectTo != null)
            redirect =  <Redirect to={{ pathname: this.state.redirectTo }} />;
        let message  = <span>{this.state.message}</span>;
        return (
            <Grid><Link to="/"><Button bsStyle="info">Back to the list</Button></Link>
                {redirect}
                {message}
                <form onSubmit={this.handleSubmit} >
                    <Table responsive striped bordered condensed >

                        <tbody>
                        <tr><td>Name:</td><td><input type="text" name="name" value={this.state.name} onChange={this.handleChange}/></td></tr>

                        <tr><td></td><td><Button type="submit" bsStyle="success">Edit Study Program</Button> </td></tr>
                        </tbody>
                    </Table>
                </form>
            </Grid>
        );

    }

}


export default editStudyProgram;