import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const ImageLazyloadingFn=()=> {

    const [images,setImages]=useState([])

    useEffect(() => {
        
        axios({
                method: 'get',
                url: 'https://api.unsplash.com/photos/random?client_id=idJIgxYXWDLtXM48nYdASF6r1JEl6BnMv8HNkoPdyAY&count=30',
                headers: { 'Authorization': '563492ad6f91700001000001f2c7c0997fb540e683ab14908ec7ecf7' }
            }
        ).then((res) => {            
                setImages(res.data);            
        })

    }, [])

  

    
        return (
            <div>
                <h1>Pixel Images</h1>
                {
                   images.map(item => {
                        
                        return (                             
                           <LazyLoadImage
                            key={item.id} 
                            effect="blur"
                            height="500px"
                            width="400px"
                            src={item.urls.regular} alt={item.alt_description} 
                            />                          
                        )
                    })
                }
            </div>
     )
}

export default ImageLazyloadingFn