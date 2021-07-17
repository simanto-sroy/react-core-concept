import React from 'react';
// import PropTypes from 'prop-types';
import Form from './form.jsx'

const initvalues = {
    name: '',
    email: '',
    password: '',
    birthDay: '',
    gender: '',
}

class SineUpForm extends React.Component {

    state = {
        values: initvalues,
        agreement: false,
        error: {},
    };

    handleChange = event => {
        this.setState({
            ...this.state.values,
            [event.target.name]: event.target.value
        })
        console.log(event.target.value);
    };

    handleChecked = event => {
        this.setState({
            agreement: event.target.checked
        })
    };

    handleSubmit = event => {
        event.preventDefault()

        const {isValid, error} = this.validate()

        if (isValid) {
            console.log(this.state.value);

            event.target.reset()
            this.setState({
                values: initvalues,
                agreement: false
            })
        }else{
            this.setState({error})
        }
    };

    validate = () => {
        const error = {}
        const { values: { name, email, password, gender, birthDay } } = this.state

        if (!name) {
            error.name = 'Please Provide Your Name'
        }
        if (!email) {
            error.name = 'Please Provide Your Email'
        }
        if (!password) {
            error.name = 'Please Provide Your Password'
        }
        if (!birthDay) {
            error.name = 'Please Provide Your BithDate'
        }
        if (!gender) {
            error.name = 'Please Select Your Gender'
        }

        return {
            error,
            isValid: Object.keys(error).length === 0,
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Sine Up</h1>
                <Form
                    values={this.state.values}
                    agreement={this.state.agreement}
                    error={this.state.error}
                    handleChange={this.handleChange}
                    handleChecked={this.handleChecked}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default SineUpForm;