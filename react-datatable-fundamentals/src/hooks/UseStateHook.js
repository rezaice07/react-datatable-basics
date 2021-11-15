import React, { useState } from 'react'

const UseStateHook = () => {

    const [count, setCount] = useState(0)

    const incrementCount = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount =>prevCount + 1)
        }
    }

    return (
        <div>
            <a target='_blank' href='https://www.youtube.com/watch?v=-3lL8oyev9w&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=47&ab_channel=Codevolution'>
                Lesson will start from here
            </a>
            <h1>Counter Clicked {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click Counter</button>
            <button onClick={() => incrementCount()}>Increment [5] times</button>
        </div>
    )
}

export default UseStateHook
