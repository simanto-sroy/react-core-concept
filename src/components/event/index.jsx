import React , { Component} from 'react';
import classes from './index.module.css'

class Event extends Component {

    state = {
        name: '',
    }

    // handleButtonClick = (event) => {
    //     console.log(event.target);
    // }

    handleChange = event => {
        this.setState({name: event.target.value});
    }

    handleFocus = () => {
        console.log('I am focus event');
    }

    handleBlur = () => {
        if(!this.state.name) {
            alert('Please Enter Your Name')
        }
        console.log('I am blur event');
    }

    render(){
        return(
           <div>
               <h2 className={classes.h2}>React Event Handinling</h2> 
                <button className={classes.button}>Click ME</button>
                <br />
                <input type="text" onFocus={this.handleFocus}
                onBlur={this.handleBlur} onChange={this.handleChange} placeholder="Enter Some text" value={this.state.name}/>
                <br />
                <br />
                {this.state.name && <h3>Welcome: {this.state.name}</h3> }
           </div>
        )
    }
}

export default Event;