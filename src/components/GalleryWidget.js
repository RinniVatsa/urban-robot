import React, { useState } from 'react';
import './GalleryWidget.css';

const GalleryWidget = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesPerPage = 3;

    const handleFileUpload = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map(file => URL.createObjectURL(file));
        setImages([...images, ...newImages]);
    };

    const nextImages = () => {
        if (currentIndex + imagesPerPage < images.length) {
            setCurrentIndex(currentIndex + imagesPerPage);
        }
    };

    const prevImages = () => {
        if (currentIndex - imagesPerPage >= 0) {
            setCurrentIndex(currentIndex - imagesPerPage);
        }
    };

    const visibleImages = images.slice(currentIndex, currentIndex + imagesPerPage);

    return ( <
        div className = "gallery-widget" > <
        div className = "controls" > <
        span className = "question-mark" > ? < /span>

        <
        div className = "button-group" >
        <
        button className = "add-gallery-button" >
        Gallery <
        /button>

        <
        input type = "file"
        id = "image-upload"
        accept = "image/*"
        multiple onChange = { handleFileUpload }
        style = {
            { display: 'none' }
        }
        /> <
        label htmlFor = "image-upload"
        className = "add-image-button" >
        +Add Image <
        /label>

        <
        button className = "add-left-button"
        onClick = { prevImages }
        disabled = { currentIndex === 0 } > ← <
        /button>

        <
        button className = "add-right-button"
        onClick = { nextImages }
        disabled = { currentIndex + imagesPerPage >= images.length } > → <
        /button> < /
        div > <
        /div>

        <
        div className = "gallery" > < div className = "flex-box-container" > {
            Array.from({ length: 6 }).map((_, index) => ( <
                div key = { index }
                className = "small-flex-box" > < /div>
            ))
        } < /div > <
        div className = "images-container" > {
            visibleImages.map((image, index) => ( <
                div className = "image-wrapper"
                key = { index } >
                <
                img src = { image }
                alt = { `Gallery ${index}` }
                /> < /
                div >
            ))
        } <
        /div> < /
        div > <
        /div>
    );
};

export default GalleryWidget;