import React from 'react';
import { Container,Form, FormGroup, Label, Input, CustomInput,Button } from 'reactstrap';
import './users.css';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { addUsers } from '../../actions/userActions';

class UserForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fname:"",
            lname:"",
            email:"",
            gender:"male",
            redirect:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        //console.log(this.state);
        let user = {
            "first_name":this.state.fname,
            "lastname":this.state.lname,
            "email":this.state.email,
            "gender":this.state.gender
        }
        this.props.addUsers(user);
        setTimeout(() => {
            this.setState({
                redirect:true
            })
        }, 3000);
    }
    render(){
        if(this.state.redirect){
            return <Redirect to="/" />
        }
        return(
            <Container className="card-container">
                <Form>
                <FormGroup>
                    <Label for="first name">First Name</Label>
                    <Input type="text" name="fname" id="fname" placeholder="Enter First Name"
                    value = {this.state.fname} onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="last name">Last Name</Label>
                    <Input type="text" name="lname" id="lname" placeholder="Enter Last Name"
                    value = {this.state.lname} onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email" 
                    value = {this.state.email} onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Gender</Label>
                    <div onChange={this.handleChange}>
                        <CustomInput type="radio" id="male" name="gender" label="Male" value="male"/>
                        <CustomInput type="radio" id="female" name="gender" label="Female" value="female" />
                    </div>
                </FormGroup>
            </Form>
            <Button onClick={this.onSubmit}>Submit</Button>
            </Container>
            
        );
    }
}

const mapStateToProps = state =>({
    users:state.users.items
})

export default connect(mapStateToProps,{addUsers})(UserForm);
