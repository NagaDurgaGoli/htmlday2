import React, { Component } from 'react'

class Welcome extends Component{
    render(){
        const {name, branchName}= this.props
        // const {statae1,state2} =this.state
    return <h1>Welcome {name} from {branchName}</h1>
    }
}

export default Welcome