import React, { useState,useEffect } from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0);
    const [name, setName]=useState('');

    useEffect(() => {
        console.log('Count')
       
    }, [count])
    useEffect(() => {
        console.log('useEffect - Updating document title');
        document.title=`You clicked ${count}`;
    },[name])

    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)} type="button"> Click {count} times</button>
        </div>
    )
}

export default UseEffectHook
