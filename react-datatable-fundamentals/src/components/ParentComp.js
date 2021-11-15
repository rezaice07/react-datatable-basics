import React, { Component } from 'react'
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

class ParentComp extends Component {
    showallo=100;
    state = {
        count: this.showallo
    }
    componentDidMount = () => {
        setInterval(() => {
            this.setState({
                count: this.showallo//this.state.count //+ 1
            });
        }, 2000)
    }

    render() {
        return (
            <div>
                <h1>count {this.state.count}</h1>
                <PureComp />
                <MemoComp/>
                <RegularComp />
            </div>
        )
    }
}

export default ParentComp
