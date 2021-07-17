import React, {Component} from 'react';
import './profile.css'
import Bio from './Bio'
import Skills from './Skills'
import Links from './Links'

class Profile extends Component {

    Me = {
        name: 'Simanto Roy',
        title: 'Full-Stack Developer',
        skillA: 'C',
        skillB: 'C++',
        skillC: 'Java',
    }
    
    render() {
        return (
            <div className="Container">
                <Bio name={this.Me.name} title={this.Me.title}/>
                <Skills skillA={this.Me.skillA} skillB={this.Me.skillB} skillC={this.Me.skillC}/>
                <Links/>
            </div>
        )
    }
}

export default Profile;