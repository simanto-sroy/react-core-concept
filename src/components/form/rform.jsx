import React, { Component} from 'react'

class ControllReact extends Component {

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
    }
    
    render() {
        const { name, email, password} = this.state
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className="form-control my-2"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <label>Email:</label>
                    <input 
                        type="text"
                        name="email"
                        placeholder="Enter Your Email"
                        className="form-control my-2"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <label>Password:</label>
                    <input 
                        type="text"
                        name="password"
                        placeholder="Enter Your Password"
                        className="form-control my-2"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default ControllReact