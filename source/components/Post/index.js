// Core
import React, { Component } from 'react';
import moment from 'moment';

// Instruments
import avatar from 'theme/assets/lisa';
import Styles from './style.m.css';

export default class Post extends Component {
    render() {
        return (
            <section className = { Styles.post }>
                <img src = { avatar } />
                <a>Lisa Simpson</a>
                <time>{moment().format('MMM D h:mm:ss a')}</time>
                <p>Howdy!</p>
            </section>
        );
    }
}
