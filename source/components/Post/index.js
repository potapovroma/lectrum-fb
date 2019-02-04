// Core
import React, { Component } from 'react';
import moment from 'moment';
import { func, string, number, array } from 'prop-types';

// Components
import Like from 'components/Like';
import { Consumer } from 'components/HOC/withProfile';

// Instruments
import Styles from './style.m.css';

export default class Post extends Component {
  static propTypes = {
    id: string.isRequired,
    comment: string.isRequired,
    created: number.isRequired,
    _likePpost: func.isRequired,
    likes: array.isRequired,
  };
    render() {
      const { comment, created, _likePpost, id, likes } = this.props;

        return (
            <Consumer>
                {(context) => (
                    <section className = { Styles.post }>
                        <img src = { context.avatar } />
                        <a>{`${ context.currentUserFirstName } ${ context.currentUserLastName }`}</a>
                        <time>{moment.unix(created).format('MMM D h:mm:ss a')}</time>
                        <p>{ comment }</p>
                        <Like id = { id } likes = { likes } _likePpost = { _likePpost } />
                    </section>
                )}
            </Consumer>
        );
    }
}
