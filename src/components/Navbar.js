import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export default class Navbar extends Component {
  scrollToTop = () => {
    console.log('scrolling ...');
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="light-blue lighten-1" role="navigation">
          <div className="nav-wrapper container">
            <a id="logo-container" onClick={this.scrollToTop} href="#" className="brand-logo">
              MOSI 3
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="#">Data Pengamatan</a>
              </li>
              <li>
                <a href="#">Data Simulasi</a>
              </li>
              <li>
                <a href="#">Tabel Simulasi</a>
              </li>
            </ul>
            <ul id="nav-mobile" className="sidenav">
              <li>
                <a href="#">Navbar Link</a>
              </li>
            </ul>
            <a href="#" data-target="nav-mobile" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
