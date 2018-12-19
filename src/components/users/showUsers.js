import React from 'react';
import {Container,Table} from 'reactstrap';
import './users.css';
//import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/userActions';

class ShowUsers extends React.Component{
    componentWillMount(){
        this.props.fetchUsers();
    }
    render(){
        //console.log(this.props.users);
        var users = this.props.users.map((user,key)=>{
            return(
                <tr key = {key}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.phone}</td>
                    <td>{user.dob}</td>
              </tr>
            );
        });
        return(
            <Container className="main-container">
                <Table responsive hover striped>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>phone</th>
                        <th>DOB</th>
                    </tr>
                    </thead>
                    <tbody>
                        {users}
                    </tbody>
                </Table>            
            </Container>
        );
    }
}

const mapStateToProps = state =>({
    users:state.users.items
})

export default connect(mapStateToProps,{fetchUsers})(ShowUsers);
