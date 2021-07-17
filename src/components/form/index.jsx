import React, { Component} from 'react'

class UncontrolForm extends Component {

    handleSubmit = e => {
        e.preventDefault();
        const data = {}
        data.name = e.target.name.value
        data.email = e.target.email.value
        data.password = e.target.password.value

        e.target.reset()
    }
    
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className="form-control my-2"
                    />
                    <label>Email:</label>
                    <input 
                        type="text"
                        name="email"
                        placeholder="Enter Your Email"
                        className="form-control my-2"
                    />
                    <label>Password:</label>
                    <input 
                        type="text"
                        name="password"
                        placeholder="Enter Your Password"
                        className="form-control my-2"
                    />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default UncontrolForm