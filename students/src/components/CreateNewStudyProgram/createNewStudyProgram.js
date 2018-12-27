import React from "react"
import {Link, Redirect} from 'react-router-dom';
import {checkStatus} from "../../repository/studentRepository";
import {Table} from "react-bootstrap";
import Button from "react-bootstrap/es/Button";
import Grid from "react-bootstrap/es/Grid";
import Alert from "react-bootstrap/es/Alert";
import { postNewStudyProgram} from "../../repository/studyProgramRepository";

class createNewStudyProgram extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            redirectTo:null,
            name:"",
            message:"",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
        handleChange(event){
            this.setState({
                name: event.target.value
            });
        }
        handleSubmit(event){
            event.preventDefault();
            postNewStudyProgram({name:this.state.name})
                .then(checkStatus)
                .then((res)=>{
                        this.props.finish();
                        this.setState({redirectTo: "/"});

                }).catch(error=>
                this.setState({
                    message: <Alert bsStyle="warning">{error.message}</Alert>
                }))


        }


    render() {
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

                    <tr><td></td><td><Button type="submit" bsStyle="success">Add new Study Program</Button> </td></tr>
                    </tbody>
                </Table>
            </form>
                </Grid>
        );
    }

}

export default createNewStudyProgram;