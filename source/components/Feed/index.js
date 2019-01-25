// Core
import React, { Component } from 'react';

// Instruments
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';

//Instruments
import Styles from './style.m.css';

export default class Feed extends Component {
  state = {
      posts:
      [
          { id: '123', comment: 'Hi there!!', created: 1526825076849},
          { id: 23, comment: 'How are you today??!', created: 1526825076903}
      ],
      spinning: false,

  };

  render() {
      const { posts, spinning } = this.state;

      const postsJSX = posts.map((post) => {
          return <Post key = { post.id } { ...post } />;
      });

      return (
          <section className = { Styles.feed }>
              <Spinner isSpinning = { spinning } />
              <StatusBar />
              <Composer />
              {postsJSX}
          </section>
      );
  }
}
