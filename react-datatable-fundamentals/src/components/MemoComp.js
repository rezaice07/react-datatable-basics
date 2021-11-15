import React, { Component } from 'react'

class MemoComp extends Component {
    render() {
        console.log('**********Memo Comp****************')
        return (
            <div>
                Memo Comp
            </div>
        )
    }
}

export default React.memo( MemoComp)
