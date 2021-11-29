import React, { Component } from 'react'

class GreetingCls extends Component {

    state = {
        count: 500
    }

    /*
    constructor(props) {
        super(props)

        this.state = {
            count: 500
        }
    }
    */

    componentDidMount=()=>{
        this.setState({
			count:this.state.count+100
		})
    }

    handleIncrement=()=>{
        this.setState((preveSate,prevProp)=>({
			 count:preveSate.count+1
		}))
    }


    render() {
        const { name, email, phone } = this.props
        return (
            <div>
                Greeting from {name}
                <br />
                Details: Email {email}, Phone: {phone}
                <br />
                Greeting Count : {this.state.count}

                <button type="button" onClick={()=>this.handleIncrement()}>
                    Click Me to add[+]
                </button>

            </div>
        )
    }
}

export default GreetingCls
