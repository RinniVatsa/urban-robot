import React from 'react';
import './App.css';
import WidgetTabs from './components/WidgetTabs';
import GalleryWidget from './components/GalleryWidget';

function App() {
    return ( <
        div className = "App" >
        <
        div className = "left-section" > < /div> <
        div className = "right-section" >
        <
        WidgetTabs / >
        <
        GalleryWidget / >
        <
        /div> <
        /div>
    );
}

export default App;