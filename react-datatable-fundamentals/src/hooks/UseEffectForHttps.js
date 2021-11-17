import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UseEffectForHttps = () => {

    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data);
            }).catch(err => {
                console.log(err)
            })
        return () => {
            //cleanup
        }
    },[id])


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPosts(res.data);
            }).catch(err => {
                console.log(err)
            })
        return () => {
            //cleanup
        }
    }, [])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <span>Id: {post.id}</span> <span>Title: {post.title}</span>

            <hr />
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}

export default UseEffectForHttps
