// Core
import React, { Component } from 'react';

// Instruments
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';

//Instruments
import Styles from './style.m.css';

console.log("style", Styles);

export default class Feed extends Component {
    render() {
        return (
            <section className = { Styles.feed }>
                <StatusBar />
                <Composer />
                <Post />
            </section>
        );
    }
}
