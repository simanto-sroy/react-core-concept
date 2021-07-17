import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => (
    <div className="from-group">
        <label htmlFor="props.name">{props.label}</label>
        <input 
            type={props.type}
            name={props.name}
            className={props.error ? 'form-control is-invalid' : 'form-control'}
            id={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
        {props.error && <div className="invalid-feedback"></div>}
    </div>
);

TextInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};

TextInput.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
};

export default TextInput;