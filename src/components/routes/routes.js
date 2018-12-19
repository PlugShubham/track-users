import React from 'react';
import {Route} from 'react-router-dom';
import ShowUsers from '../users/showUsers';
import AddUsers from '../users/addUsers';

class Routes extends React.Component{
    render(){
        return(
                <div>
                <Route path="/" exact={true} component={ShowUsers}/>
                <Route path="/add" exact={true} component={AddUsers}/>
                </div>
        );
    }
}

export default Routes;
