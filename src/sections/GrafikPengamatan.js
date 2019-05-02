import React, { Component } from 'react';
import GrafikDoughnut from '../components/GrafikDoughnut';
import GrafikBar from '../components/GrafikBar';

let dataArea = require('../data/dataArea.json');
let dataTabelSimulasi = require('../data/dataTabelSimulasi.json');

export default class GrafikPengamatan extends Component {
  render() {
    let labelArea = dataArea.map(data => {
      return data.wilayah;
    });
    let dataAreaProps = dataArea.map(data => {
      return data.durasi;
    });
    let labelTabel = dataTabelSimulasi.map(data => {
      return data.i;
    });
    let dataTabel = dataTabelSimulasi.map(data => {
      return data.totalWaktu;
    });

    return (
      <div id="section3" className="container">
        <h1>Grafik Pengamatan</h1>
        <br />
        <br />
        <GrafikDoughnut judul={'Grafik Frekuensi Tujuan Antar'} labelArea={labelArea} dataArea={dataAreaProps} />
        <br />
        <GrafikBar
          judul={'Grafik Total Waktu Pelayanan'}
          labelGraph={'Total Waktu Pelayanan dalam Menit'}
          labelArea={labelTabel}
          dataArea={dataTabel}
        />
      </div>
    );
  }
}
