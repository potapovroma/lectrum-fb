// Core
import React, { Component } from 'react';
import { string, func, arrayOf, shape } from 'prop-types';
import cx from 'classnames';

// Instruments
import Styles from './style.m.css';

export default class Like extends Component {
      static propTypes = {
          _likePost: func.isRequired,
          id: string.isRequired,
          likes: arrayOf(
              shape({
                  id: string.isRequired,
                  firstName: string.isRequired,
                  lastName: string.isRequired,
              }),
          ).isRequired,
      };

      constructor () {
          super();

          this._getLikedByMe = this._getLikedByMe.bind(this);
          this._getLikeStyles = this._getLikeStyles.bind(this);
          this._likePost = this._likePost.bind(this);
      }

      _likePost () {
          const { _likePost, id } = this.props;
          _likePost(id);
      }

    _getLikedByMe () {
      const { currentUserFirstName, currentUserLastName, likes } = this.props;

        return likes.some(({ firstName, lastName }) => {
        return (
          `${firstName} ${lastName}` ===
          `${currentUserFirstName} ${currentUserLastName}`
      );
      });
    }

      _getLikeStyles () {
          const likedByMe = this._getLikedByMe();
          console.log(likedByMe);
          if (!likedByMe) {
              return cx(Styles.icon, {
                  [Styles.liked]: likedByMe,
                  cheked: likedByMe,
              });
          } else {
            return cx(Styles.icon, {
                [Styles.liked]: likedByMe,
                cheked: likedByMe,
            });
          }

      }

      render () {
          const likeStyles = this._getLikeStyles();
          console.log(likeStyles);

          return (
              <section className = { Styles.like }>
                  <span
                      className = { !likeStyles.cheked ? likeStyles : '' }
                    onClick = { this._likePost }>Like</span>
              </section>
          );
      }
}
