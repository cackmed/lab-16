import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './Character.css';


export default class Character extends Component {
    static propTypes = {
      img: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      status: propTypes.string.isRequired,
      species: propTypes.string.isRequired,
      gender: propTypes.string.isRequired,
      origin: propTypes.string.isRequired,
      lastLocation: propTypes.string.isRequired
    }

    render() {
      const { img, name, status, species, gender, origin, lastLocation } = this.props;

      return (
        <>
          <dl className={styles.Character}>
            <h2>{name}</h2>
            <img src={img}></img>
            <dt> Status <dd>{status}</dd></dt>
            <dt> Species<dd>{species}</dd></dt>
            <dt> Gender<dd>{gender}</dd></dt>
            <dt> Origin<dd>{origin}</dd></dt>
            <dt> Last Location<dd>{lastLocation}</dd></dt>
          </dl>
        </>
      ); 
    }
}
