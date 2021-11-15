
import React, { Component } from 'react'

const withCounter = (WrappedComponent,payload=0) => {
    class WithCounter extends Component {

        state = {
            count: 0
        }
    
    
        incrementCount = () => {
            this.setState((prevState) => {
                return {
                    count: prevState.count + payload
                }
            })
        }

        render() {
            console.log(this.props.name)
            return (
                <WrappedComponent                 
                count={this.state.count} 
                incrementCount={this.incrementCount}
                {...this.props} />
            )
        }
    }

    return WithCounter
}

export default withCounter