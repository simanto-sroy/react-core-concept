import React, { Component} from 'react';

class Inputs extends Component {

    state = {
        name: '',
        country: '',
        bio: '',
        birthDay: '',
        gander: '',
        agree: false,
        skills: [],
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCheckBox = e => {
        this.setState({
            agree: e.target.checked
        })
    }

    handleSkillChange = (e) => {
        if(e.target.checked) {
            this.setState ({
                skills: [...this.state.skills, e.target.value],
            })
        } else {
            const skills = this.state.skills.filter(skill => skill!== e.target.value)
            this.setState({ skills })
        }
    }

    render () {
        const { name, country, bio, birthDay, agree, skills } = this.state
        return(
            <div className="container">
                <input 
                    className="form-control" 
                    type="text" 
                    name="name" 
                    placeholder="Enter Your Name"
                    onChange={this.handleChange}
                    value={name}
                />
                <br />
                <select 
                    className="form-control" 
                    name="country" onChange={this.handleChange}
                    value={country}>
                        <option value="">Select Country</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Srilanka">Srilanka</option>
                        <option value="China">China</option>
                </select>
                <br />
                <textarea 
                    className="form-control" 
                    name="bio" 
                    placeholder="Tell Me About Yourself"
                    onChange={this.handleChange}
                    value={bio}
                >
                </textarea>
                <br />
                <input 
                    className="form-control" 
                    type="date" 
                    name="birthDay"
                    onChange={this.handleChange}
                    value={birthDay}
                />
                <div>
                    <input 
                        type="radio" 
                        name="gander" 
                        value="Male" 
                        onChange={this.handleChange}
                    />
                    Male
                    <input 
                        type="radio" 
                        name="gander" 
                        value="Female" 
                        onChange={this.handleChange}
                    />
                    Female
                    <input 
                        type="radio" 
                        name="gander" 
                        value="other" 
                        onChange={this.handleChange}
                    />
                    Other
                </div>
                <div>
                    Skills <br />
                    <input 
                        type="checkbox"    
                        name="skills" 
                        value="Java"
                        checked={skills.includes('Java')} 
                        onChange={this.handleSkillChange}
                    />
                    Java
                    <input 
                        type="checkbox"    
                        name="skills" 
                        value="JavaScript"
                        checked={skills.includes('JavaScript')} 
                        onChange={this.handleSkillChange}
                    />
                    JavaScript
                    <input 
                        type="checkbox"    
                        name="skills" 
                        value="Python"
                        checked={skills.includes('Python')} 
                        onChange={this.handleSkillChange}
                    />
                    Python
                    <input 
                        type="checkbox"    
                        name="skills" 
                        value="C#"
                        checked={skills.includes('C#')} 
                        onChange={this.handleSkillChange}
                    />
                    C#
                </div>
                <div>
                    <input 
                        type="checkbox" 
                        name="agree"
                        checked={agree}
                        onChange={this.handleCheckBox}
                    /> 
                     I agree to all the terms and condition
                </div>
                <button onClick={()=> console.log(this.state)}>
                    Show Data
                </button>
            </div>
        )
    }
}

export default Inputs