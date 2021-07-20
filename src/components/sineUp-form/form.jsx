import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './text.jsx'


const Form = ({ values, handleChange, handleChecked, handleSubmit, agreement, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                name="name"
                label="Name"
                placeholder="Enter Your Name"
                value={values.name}
                onChange={handleChange}
                errors={error.name}
            />
            <TextInput
                name="email"
                type="email"
                placeholder="Enter Your email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                errors={error.email}
            />
            <TextInput
                name="password"
                type="password"
                placeholder="*******"
                label="Password"
                value={values.password}
                onChange={handleChange}
                errors={error.password}
            />
            <TextInput
                name="birthDay"
                type="date"
                label="Bith Date"
                value={values.birthDay}
                onChange={handleChange}
                errors={error.birthDay}
            />
            <div className="form-group my-3">
                <label>
                    <input type="radio" name="gender" value="Male" onChange={handleChange} />
                    Male
                </label>
                <label>
                    <input type="radio" name="gender" value="Female" onChange={handleChange} />
                    Female
                </label>
                <label>
                    <input type="radio" name="gender" value="Other" onChange={handleChange} />
                    Other
                </label>
                {error.gender && <div className="invalid-feedback">{error.gender}</div>}
            </div>
            <div className="form-group my-3">
                <label>
                    <input type="checkbox" name="agreement" checked={agreement} onChange={handleChecked} />
                    I Agree all the tems and condition
                </label>
            </div>
            <button className="btn btn-primary" type="submit" disabled={!agreement}>User Create</button>
        </form>
    );
}

Form.propTypes = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    error: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChecked: PropTypes.func.isRequired,
}

export default Form;