import React, { Component } from 'react';
import GrafikLine from '../components/GrafikLine';

let dataPengamatan = require('../data/dataPengamatan.json');
let dataLamaPenyucian = require('../data/dataLamaPenyucian.json');
let dataArea = require('../data/dataArea.json');

export default class DataPengamatan extends Component {
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
      <div id="section1">
        <div className="container">
          <h3>Data Kedatangan Antar Pelanggan </h3>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Kelas Interval</th>
                <th />
                <th>Frekuensi</th>
              </tr>
            </thead>

            <tbody>
              {dataPengamatan.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.nomor}</td>
                    <td>{data.batasBawah}</td>
                    <td>{data.batasAtas}</td>
                    <td>{data.frekuensi}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h3>Data Lama Penyucian Motor </h3>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Kelas Interval</th>
                <th />
                <th>Frekuensi</th>
              </tr>
            </thead>

            <tbody>
              {dataLamaPenyucian.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.nomor}</td>
                    <td>{data.batasBawah}</td>
                    <td>{data.batasAtas}</td>
                    <td>{data.frekuensi}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h3>Data Area Tujuan </h3>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Wilayah</th>
                <th>Durasi (menit)</th>
              </tr>
            </thead>

            <tbody>
              {dataArea.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.nomor}</td>
                    <td>{data.wilayah}</td>
                    <td>{data.durasi}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <GrafikLine judul="Grafik Kedatangan Antar Pelanggan" dataAreaProps={dataAreaProps} labelArea={labelArea} />
        <GrafikLine
          judul="Grafik Pengamatan Data Area Tujuan"
          dataAreaProps={dataPengamatanProps}
          labelArea={labelPengamatan}
        />
      </div>
    );
  }
}
