import React, { useState } from 'react';
import './GalleryWidget.css';

const GalleryWidget = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesPerPage = 3;


    const handleFileUpload = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages((prevImages) => [...prevImages, ...newImages]);
    };


    const nextImages = () => {
        if (currentIndex < totalPages - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };


    const prevImages = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };


    const staticImages = [
        require('./img1.jpeg'),
        require('./img2.jpeg'),
        require('./img2.jpeg'),
    ];


    const totalPages = Math.ceil((images.length + staticImages.length) / imagesPerPage);


    const getCurrentImages = () => {
        if (currentIndex === 0) {

            return staticImages.slice(0, imagesPerPage);
        } else {

            const startIndex = (currentIndex - 1) * imagesPerPage;
            return images.slice(startIndex, startIndex + imagesPerPage);
        }
    };

    const visibleImages = getCurrentImages();
    return ( <
        div className = "gallery-widget" >
        <
        div className = "controls" >
        <
        span className = "question-mark" > ? < /span>

        <
        div className = "button-group" >
        <
        button className = "add-gallery-button" > Gallery < /button>

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
        disabled = { currentIndex === 0 } > ←
        <
        /button>

        <
        button className = "add-right-button"
        onClick = { nextImages }
        disabled = { currentIndex >= totalPages - 1 } > →
        <
        /button> < /
        div > <
        /div>

        <
        div className = "gallery" >
        <
        div className = "flex-box-container" > {
            Array.from({ length: 6 }).map((_, index) => ( <
                div key = { index }
                className = "small-flex-box" > < /div>
            ))
        } <
        /div>

        <
        div className = "images-container" > {
            visibleImages.map((image, index) => ( <
                div className = "image-wrapper"
                key = { index } >
                <
                img src = { typeof image === 'string' ? image : image.default }
                alt = { `Gallery ${index}` }
                className = "gallery-image" /
                >
                <
                /div>
            ))
        } <
        /div> < /
        div > <
        /div>
    );
};

export default GalleryWidget;