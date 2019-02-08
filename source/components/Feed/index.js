// Core
import React, { Component } from 'react';
import moment from 'moment';

// Instruments
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';

//Instruments
import Styles from './style.m.css';
import { getUniqueID, delay } from 'instruments';

export default class Feed extends Component {
    constructor () {
        super();

        this._createPost = this._createPost.bind(this);
        this._setPostsFetchingState = this._setPostsFetchingState.bind(this);
        this._likePost = this._likePost.bind(this);
    }

  state = {
      posts:
      [
          { id: '123', comment: 'Hi there!!', created: 1526825076849, likes: []},
          { id: '23', comment: 'How are you today??!', created: 1526825076903, likes: []}
      ],
      spinning: false,

  };

  _setPostsFetchingState (state) {
    this.setState({
      spinning: state,
    })
  }

  async _createPost (comment) {
    this._setPostsFetchingState(true);
      const post = {
          id:      getUniqueID(),
          created: moment().utc(),
          comment,
          likes: [],
      };

      await delay(2000);

      this.setState(({ posts }) => ({
          posts: [post, ...posts],
          spinning: false,
      }));
  }

  async _likePost (id) {
    const { currentUserFirstName, currentUserLastName } = this.props;
    this._setPostsFetchingState(true);

    await delay(1200);

      const newPosts = this.state.posts.map((post) => {
          if (post.id === id) {
              return {
                  ...post,
                  likes: [
                      {
                          id: getUniqueID(),
                          firstName: currentUserFirstName,
                          lastName: currentUserLastName,
                      }
                  ],
              };
          }
          return post;
      });

      this.setState({
          posts: newPosts,
          spinning: false,
      });
  }

render () {
      const { posts, spinning } = this.state;

      const postsJSX = posts.map((post) => {
          return <Post key = { post.id } { ...post } _likePost = { this._likePost } />;
      });

      return (
          <section className = { Styles.feed }>
              <Spinner isSpinning = { spinning } />
              <StatusBar />
              <Composer _createPost = { this._createPost }/>
              {postsJSX}
          </section>
      );
  }
}
