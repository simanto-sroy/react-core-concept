import React from 'react';
import PropTypes from 'prop-types';
import Form from './form.jsx'


class SineUpForm extends React.Component {

    state = {
        values: {
            name: '',
            email: '',
            password: '',
            birthDay: '',
            gender: '',
        },
        agreement: false,
        error: {},
    };

    handleChange = (event) => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        })
    }

    handleChecked = event => {
        this.setState({
            agreement: event.target.checked
        })
    };

    handleSubmit = event => {
        event.preventDefault()

        const { isValid, error } = this.validate();

        if (isValid) {
            this.props.createUser(this.state.values)
            event.target.reset()
            this.setState({
                values: {
                    name: '',
                    email: '',
                    password: '',
                    birthDay: '',
                    gender: '',
                },
                agreement: false,
                error: {}
            })
        } else {
            this.setState({ error })
        }
    };

    validate = () => {
        const error = {}
        const { values: { name, email, password, gender, birthDay } } = this.state

        if (!name) {
            error.name = 'Please Provide Your Name'
        }
        
        if (!email) {
            error.email = 'Please Provide Your Email'
        }
        
        if (!password) {
            error.password = 'Please Provide Your Password'
        }
       
        if (!birthDay) {
            error.birthDay = 'Please Provide Your BithDate'
        }
        
        if (!gender) {
            error.gender = 'Please Select Your Gender'
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

SineUpForm.propTypes = {
    createUser: PropTypes.func.isRequired
}

export default SineUpForm;