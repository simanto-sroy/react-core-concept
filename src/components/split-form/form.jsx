import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './text';

const Form = (props) => (
    <form onSubmit={props.handleSubmit}>
        <TextInput
            name="name"
            label="Name"
            placeholder="Enter Your Name"
            value={props.values.name}
            onChange={props.handleChange}
        />
        <TextInput
            name="email"
            type="email"
            label="Email"
            placeholder="Enter Your Email"
            value={props.values.email}
            onChange={props.handleChange}
        />
        <TextInput
            name="password"
            type="password"
            label="Password"
            placeholder="********"
            value={props.values.password}
            onChange={props.handleChange}
        />
        <button type="submit">Submit</button>
    </form>
);

Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default Form;