import React, { Component}from 'react';
import SineUpForm from './sineUp-form/index.jsx';

class App extends Component {

    state = {
        users: [],
    }

    createUser = (user) => {
        user.id = new Date().getDate().toString()
        this.setState({
            users: [...this.state.users, user]
        })
    }
    
    render() {
        return (
            <div>
                <SineUpForm createUser={this.createUser}/>
                <div className="container">
                    <h3 className="my-3">All Reagister Users</h3>
                    <ul className="list-group">
                        {this.state.users.map(user => (
                            <li key={user.id} className="list-group-item">
                                {user.name} || {user.email}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default App;