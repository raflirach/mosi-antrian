import React, { Component } from 'react';

export default class Intro extends Component {
  render() {
    return (
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <h1 className="header center orange-text">Pemodelan dan Simulasi - 3</h1>
          <div className="row center">
            <h5 className="header col s12 light">
              Studi Kasus antrian diambil dari Tempat Pencucian Motor X. Dta pengamatan dilakukan dalam dua hari diambil
              di hari Jumat 19 April 2019 dan Sabtu 20 April 2019 pada segmen waktu 13.00-15.00.
            </h5>
          </div>
          <div className="row center">
            <a href="#" id="goButton" className="btn-large waves-effect waves-light orange">
              Lihat Data Pengamatan
            </a>
          </div>
        </div>
      </div>
    );
  }
}
