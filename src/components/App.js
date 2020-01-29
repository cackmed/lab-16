import React, { Component } from 'react';
import styles from './App.css';
import Character from './Character';

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
        <Character img="" name="Jerry Smith" status="Alive" species="Human" gender="Male" origin="Earth (Replacement Dimension)" lastLocation="Earth (Replacement Dimension)"/>

        <Character img="" name="Amish Cyborg" status="Dead" species="Alien, Parasite, Cyborg" gender="Male" origin="unknown" lastLocation="Earth (Replacement Dimension)"/>

        <Character img="" name="Courier Flap" status="Alive" species="Alien" gender="unknown" origin="unknown" lastLocation="Planet Squanch"/>

        <Character img="" name="Jaguar" status="Alive" species="Human" gender="Male" origin="Earth (Replacement Dimension)" lastLocation="Earth (Replacement Dimension)"/>

        <Character img="" name="Jerry's Mytholog" status="Dead" species="Mytholog" gender="Male" origin="Nuptia 4" lastLocation="Nuptia 4"/>

        <Character img="" name="Presidentress of The Mega Gargantuans" status="Alive" species="Humanoid, Mega Gargantuan" gender="Female" origin="Mega Gargantuan Kingdom" lastLocation="Mega Gargantuan Kingdom"/>

        <Character img="" name="Arbolian Mentirososian" status="Alive" species="Alien" gender="unknown" origin="Árboles Mentirosos" lastLocation="St. Gloopy Noops Hospital"/>

        <Character img="" name="Journalist Rick" status="Alive" species="Human" gender="Male" origin="unknown" lastLocation="Citadel of Ricks"/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
