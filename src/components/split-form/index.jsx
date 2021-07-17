import React, { Component} from 'react'
import Form from './form'

class SplitForm extends Component {

    state = {
        name: '',
        email: '',
        password: '',
    }

    handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        // const data = {}
        // data.name = e.target.name.value
        // data.email = e.target.email.value
        // data.password = e.target.password.value

        this.setState({
            name: '',
            email: '',
            password: '',
        })

        console.log(this.state);
    }
    
    render() {
        return (
            <div className="container">
               <Form
                    values={this.state}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
               />
            </div>
        )
    }
}

export default SplitForm;