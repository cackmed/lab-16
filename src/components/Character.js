import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '/Character.css';


export default class Character extends Component {
    static PropTypes = {
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      origin: PropTypes.string.isRequired,
      lastLocation: PropTypes.string.isRequired
    }

    render() {
      const { img, name, status, species, gender, origin, lastLocation } = this.props;

      return (
        <dI>
          <img src={img}></img>
          <dt> Name <dd>{name}</dd></dt>
          <dt> Status <dd>{status}</dd></dt>
          <dt> Species<dd>{species}</dd></dt>
          <dt> Gender<dd>{gender}</dd></dt>
          <dt> Origin<dd>{origin}</dd></dt>
          <dt> Last Location<dd>{lastLocation}</dd></dt>
        </dI>
      ); 
    }
}
