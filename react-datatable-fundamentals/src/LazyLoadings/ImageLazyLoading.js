import React, { Component } from 'react'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


/*
https://www.pexels.com
Api Key 563492ad6f91700001000001f2c7c0997fb540e683ab14908ec7ecf7

https://api.pexels.com/v1/search?query=nature&&per_page=50
Header : Authorization :563492ad6f91700001000001f2c7c0997fb540e683ab14908ec7ecf7



https://unsplash.com/oauth/applications/279139

Access Key: idJIgxYXWDLtXM48nYdASF6r1JEl6BnMv8HNkoPdyAY
Secret Key : 1jBIEhSbjzCSRPvE68031JpUwdkSZNxNn_67OzDVA-Y 

https://api.unsplash.com/photos/?client_id=idJIgxYXWDLtXM48nYdASF6r1JEl6BnMv8HNkoPdyAY

Plugins
01. npm i --save react-lazy-load-image-component //https://github.com/Aljullu/react-lazy-load-image-component
02. Axios
03. refcences : https://www.youtube.com/watch?v=0-Ze5dEgVFk&ab_channel=DailyWebCoding

*/


class ImageLazyLoading extends Component {

    constructor(props) {
        super(props)

        this.state = {
            images: []
        }
    }


    componentDidMount = () => {

        axios(
            {
                method: 'get',
                url: 'https://api.unsplash.com/photos/random?client_id=idJIgxYXWDLtXM48nYdASF6r1JEl6BnMv8HNkoPdyAY&count=30',
                headers: { 'Authorization': '563492ad6f91700001000001f2c7c0997fb540e683ab14908ec7ecf7' }
            }
        ).then((res) => {
            this.setState({
                images: res.data
            })
        })


        // axios(
        //     {
        //         method: 'get',
        //         url: 'https://api.pexels.com/v1/search?query=nature&&per_page=50',
        //         headers: { 'Authorization': '563492ad6f91700001000001f2c7c0997fb540e683ab14908ec7ecf7' }
        //     }
        // ).then((res) => {
        //     this.setState({
        //         images: res.data.photos
        //     })
        // })
    }
    render() {
        return (
            <div>
                <h1>Pixel Images</h1>
                {
                    this.state.images.map(item => {
                        
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
}

export default ImageLazyLoading





// https://www.youtube.com/watch?v=0-Ze5dEgVFk&ab_channel=DailyWebCoding

//https://www.codecheef.org/article/react-lazy-load-data-with-images-on-scroll-example