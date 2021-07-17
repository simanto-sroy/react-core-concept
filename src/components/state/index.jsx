import React, { Component } from 'react';
import './index.css'

class State extends Component {

    // constructor(props) {
    //     super(props)
    //     this.count = 0;
    //     this.state = {
    //         count: 0
    //     }
    // }

    // count = 0;

    state = {
        count: 0
    }

    interValid = null

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    decrement = () => {
        if(this.state.count > 0) {
            this.setState({count: this.state.count - 1})
        }
    }


    startTimer = () => {
        if(this.state.count > 0 && !this.interValid) {
            this.interValid = setInterval(()=>{
                this.setState({count: this.state.count - 1 }, () => {
                     if(this.state.count === 0) {
                        alert('Timer Finised')
                        clearInterval(this.interValid)
                        this.interValid = null;
                     }
                });
            },1000);
        }
    }

    stopTimer = () => {
        if(this.interValid) {
            clearInterval(this.interValid);
            this.interValid = null
        }
    }

    resetTimer = () => {
        this.setState({count: 0})
        clearInterval(this.interValid)
        this.interValid = null
    }


    render() {
        return (
            <div className="App">
                <h1>Simple Timer</h1>
                {/* <h1>Count = {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState((prev) => {
                        return {
                            count: prev.count + 1
                        }
                    }, () => {
                        
                    })
                }}>ADD</button> */}

                <div>
                    <button className="Btn" onClick={this.decrement}> - </button>
                    <span>{this.state.count}</span>
                    <button className="Btn"  onClick={this.increment}> + </button>
                </div>

                <div>
                    <button onClick = {this.startTimer}className="Btn">Start</button>
                    <button onClick={this.stopTimer}className="Btn">Stop</button>
                    <button onClick={this.resetTimer} className="Btn">Reset</button>
                </div>
               

            </div>
        )
    }
}

export default State