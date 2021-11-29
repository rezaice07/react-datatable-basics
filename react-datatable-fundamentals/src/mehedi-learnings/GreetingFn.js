import React, { useState, useEffect } from 'react'


const GreetingFn = (props) => {

    const [count, setCount] = useState(100)

    useEffect(() => {
        setCount(count+500)
    }, [])


    const { name, email, phone } = props
    return (
        <div>
            Greeting from {name}
            <br />
            Details: Email {email}, Phone: {phone}
            <br/>
            Greeting Count : {count}
        </div>
    )
}

export default GreetingFn
