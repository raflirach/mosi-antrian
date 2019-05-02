import React, { Component } from 'react';
import GrafikDoughnut from '../components/GrafikDoughnut';
import GrafikLine from '../components/GrafikLine';

let dataPengamatan = require('../data/dataPengamatan.json');
let dataLamaPenyucian = require('../data/dataLamaPenyucian.json');
let dataArea = require('../data/dataArea.json');
let dataBilanganAcakPelanggan = require('../data/dataBilanganAcakPelanggan.json');
let dataBlanganAcakLamaPencucian = require('../data/dataBlanganAcakLamaPencucian.json');
let dataTujuanAntar = require('../data/dataTujuanAntar.json');

export default class GrafikPengamatan extends Component {
  render() {
    let labelPengamatan = dataPengamatan.map(data => {
      return data.frekuensi;
    });
    let dataPengamatanProps = dataPengamatan.map(data => {
      return data.batasBawah;
    });
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
