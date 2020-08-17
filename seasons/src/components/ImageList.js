import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    console.log('props image',props.images);

    // take 10 aRRAY

    // const images = props.images.map((image) => {
    //     return <img key={image.id} src={image.urls.regular} alt={image.description}/>
    // })

    // short way of above

    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
    })

    return <div className="image-list">{images}</div>
}

export default ImageList;
