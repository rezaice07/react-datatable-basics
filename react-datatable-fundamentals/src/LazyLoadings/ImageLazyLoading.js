import React, { Component } from 'react'
import axios from 'axios'


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
                url: 'https://api.pexels.com/v1/search?query=nature&&per_page=50',
                headers: { 'Authorization': '563492ad6f91700001000001f2c7c0997fb540e683ab14908ec7ecf7' }
            }
        ).then((res) => {            
            this.setState({
                images: res.data.photos
            })
        })
    }
    render() {

        console.log(this.images);
        return (
            <div>
                <h1>Pixel Images</h1>
                {
                    this.images && this.images.map(image => {
                        <img src={image.url} alt="none" />
                    })
                }
            </div>
        )
    }
}

export default ImageLazyLoading





// https://www.youtube.com/watch?v=0-Ze5dEgVFk&ab_channel=DailyWebCoding

//https://www.codecheef.org/article/react-lazy-load-data-with-images-on-scroll-example