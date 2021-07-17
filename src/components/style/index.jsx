import React, { Component}from 'react';
import './index.css'

const myHeader = {
    color: 'red',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
}

class Style extends Component {

    render() {
        return(
           <div>
                <h1 style={myHeader}>Hello React I from style say</h1>
                <button>ClickMe</button>
           </div>
        )
    }
}

export default Style