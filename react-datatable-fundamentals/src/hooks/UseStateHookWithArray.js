import React, { useState } from 'react'

const UseStateHookWithArray = () => {
    // let item = {
    //     id: '',
    //     value: ''
    // }
    //let initItems = [item];
    const [items, setItems] = useState([]);

    const AddItems = () => {

        console.log(Math.floor(Math.random()));

        setItems([...items,
        {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }
        ])
    }

    return (
        <div>
            <a target='_blank' href="https://www.youtube.com/watch?v=06Y6aJzTmXY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=49&ab_channel=Codevolution">
                Next Video
            </a><br/>

            <button type="button" onClick={()=>AddItems() } > Add Number</button>
            <ul>
                {
                    items.map(item => (<li key={item.id}>{item.value}</li>))
                }
            </ul>
        </div>
    )
}

export default UseStateHookWithArray
