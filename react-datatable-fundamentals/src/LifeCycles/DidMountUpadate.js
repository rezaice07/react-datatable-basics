import React, { Component } from 'react'

class DidMountUpadate extends Component {
    state = {
        count: 0
    }
    componentDidMount = () => {
        document.title = `Click count ${this.state.count}`;
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log(prevState.count)
        console.log(this.state.count)

        if (prevState.count != this.state.count) {
            console.log('componentDidUpdate')
            document.title = `Click count ${this.state.count}`;
        }
    }

    render() {
        return (
            <div>
                <button type="button" onClick={() => this.setState({ count: this.state.count + 1 })}> Click Count {this.state.count}</button>
            </div>
        )
    }
}

export default DidMountUpadate
