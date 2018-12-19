import React from 'react';
import './users.css';
import { Container,Row,Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import UserForm from './form';

class AddUsers extends React.Component{
    render(){
        return(
            <Container className = "main-container">
                <Row>
                    <Col>
                        <Link to="/">back</Link>
                    </Col>
                </Row>
                <br />
                <UserForm/>
            </Container>
        );
    }
}

export default AddUsers;