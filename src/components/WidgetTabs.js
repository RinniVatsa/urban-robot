import React, { useState } from 'react';
import './WidgetTabs.css';

const WidgetTabs = () => {
    const [activeTab, setActiveTab] = useState('about');

    return ( <
        div className = "widget-tabs" >
        <
        span className = "question-mark" > ? < /span> 

        <
        div className = "flex-box-container" > {
            Array.from({ length: 6 }).map((_, index) => ( <
                div key = { index }
                className = "small-flexx-box" > < /div>
            ))
        } < /div >

        <
        div className = "tabs" > {
            ['about', 'experiences', 'recommended'].map((tab) => ( <
                button key = { tab }
                className = { activeTab === tab ? 'active' : '' }
                onClick = {
                    () => setActiveTab(tab)
                } > { tab.charAt(0).toUpperCase() + tab.slice(1) } <
                /button>
            ))
        } <
        /div>   <div className="tab-content"> {
        activeTab === 'about' && ( <
            >
            <
            p >
            Hello!I’ m Dave, your sales rep here from Salesforce.I’ ve been working at this awesome company
            for 3 years now. <
            /p>  <
            p >
            I was born and raised in Albany, NY & have been living in Santa Carla
            for the past 10 years with my wife Tiffany and my 4 - year - old twin daughters - Emma and Ella.Both of them are just starting school, so my calendar is usually blocked between 9 - 10 AM.This is a... <
            /p> < / >
        )
    } {
        activeTab === 'experiences' && < p > Experiences Content < /p>} {
        activeTab === 'recommended' && < p > Recommended Content < /p>} < /
        div > < /
        div >
    );
};

export default WidgetTabs;