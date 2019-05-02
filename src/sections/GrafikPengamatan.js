import React, { Component } from 'react';
import GrafikDoughnut from '../components/GrafikDoughnut';
let dataArea = require('../data/dataArea.json');

export default class GrafikPengamatan extends Component {
  render() {
    let labelArea = dataArea.map(data => {
      return data.wilayah;
    });
    let dataAreaProps = dataArea.map(data => {
      return data.durasi;
    });
    return (
      <div id="section3" className="container">
        <h1>Grafik Pengamatan</h1>
        <br />
        <h3>Grafik Data Pengamatan</h3>
        <GrafikDoughnut labelArea={labelArea} dataArea={dataAreaProps} />
      </div>
    );
  }
}
