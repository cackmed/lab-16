import React, { Component } from 'react';
import styles from './App.css';
import Character from './Character';
import jerry from '../assets/jerry.jpeg';
import cyborg from '../assets/Cyborg.jpeg';
import flap from '../assets/Flap.jpeg';
import jaguar from '../assets/Jaguar.jpeg';
import mytholog from '../assets/Mytholog.jpeg';
import presidentress from '../assets/Presidentress.jpeg';
import rick from '../assets/Rick.jpeg';
import arbolian from '../assets/Arbolian.jpeg';

class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <nav>
          <ul>
            <li><a className={styles.active} href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Documentation</a></li>
          </ul>
        </nav>
        <section>
          <h1>The Rick And Morty Api</h1>
          <h2>Hey, did you ever want to hold a Terry fold?</h2>
        </section>
      </header>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className={styles.Footer}>
        <section className={styles.stats}>
          <p>Characters: 493</p>
          <p>Locations: 76</p>
          <p>Episodes: 31</p>
        </section>
        <section className={styles.acknowledgment}>
          <p>❮❯ by <a href="#">Axel Fuhrmann</a> 2020</p>
        </section>
      </footer>
    );
  }
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className={styles.Grid}>
          <Character img={jerry} name="Jerry Smith" status="Alive" species="Human" gender="Male" origin="Earth (Replacement Dimension)" lastLocation="Earth (Replacement Dimension)"/>
          <Character img={cyborg} name="Amish Cyborg" status="Dead" species="Alien, Parasite, Cyborg" gender="Male" origin="unknown" lastLocation="Earth (Replacement Dimension)"/>
          <Character img={flap} name="Courier Flap" status="Alive" species="Alien" gender="unknown" origin="unknown" lastLocation="Planet Squanch"/>
          <Character img={jaguar} name="Jaguar" status="Alive" species="Human" gender="Male" origin="Earth (Replacement Dimension)" lastLocation="Earth (Replacement Dimension)"/>
          <Character img={mytholog} name="Jerry's Mytholog" status="Dead" species="Mytholog" gender="Male" origin="Nuptia 4" lastLocation="Nuptia 4"/>
          <Character img={presidentress} name="Presidentress of The Mega Gargantuans" status="Alive" species="Humanoid, Mega Gargantuan" gender="Female" origin="Mega Gargantuan Kingdom" lastLocation="Mega Gargantuan Kingdom"/>
          <Character img={arbolian} name="Arbolian Mentirososian" status="Alive" species="Alien" gender="unknown" origin="Árboles Mentirosos" lastLocation="St. Gloopy Noops Hospital"/>
          <Character img={rick} name="Journalist Rick" status="Alive" species="Human" gender="Male" origin="unknown" lastLocation="Citadel of Ricks"/>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
