import React, { Component } from 'react';
import GrafikLine from '../components/GrafikLine';

let dataPengamatan = require('../data/dataPengamatan.json');
let dataLamaPenyucian = require('../data/dataLamaPenyucian.json');
let dataArea = require('../data/dataArea.json');
let dataBilanganAcakPelanggan = require('../data/dataBilanganAcakPelanggan.json');

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
      <div>
        <div id="section1">
          <div className="container">
            <h2>Data Hasil Pengamatan</h2>
            <div className="tablecontainer">
              <table>
                <caption>Data Kedatangan Antar Pelanggan</caption>
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
            </div>
            <div className="tablecontainer">
              <table>
                <caption>Data Lama Penyucian Motor</caption>
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
            </div>
            <div className="tablecontainer">
              <table>
                <caption>Data Area Tujuan</caption>
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
          </div>
          {/* <GrafikLine judul="Grafik Kedatangan Antar Pelanggan" dataAreaProps={dataAreaProps} labelArea={labelArea} />
        <GrafikLine
          judul="Grafik Pengamatan Data Area Tujuan"
          dataAreaProps={dataPengamatanProps}
          labelArea={labelPengamatan}
        /> */}
        </div>
        <div id="section2">
          <div className="container">
            <h2>Tabel Simulasi</h2>
            <div className="tablecontainer">
              <table>
                <caption>
                  Tabel Variabel antar Kedatangan pelanggan
                  <p>
                    Menggunakan deret bilangan acak yang dibangkitkan dengan metode Linear Congruential Generator dengan
                    asumsi:
                  </p>
                  <ul>
                    <li>Konstanta Pengali : 6102</li>
                    <li>Konstanta Increment : 6110</li>
                    <li>Konstanta Modulus : 6132</li>
                    <li>Nilai Awal : 1011</li>
                  </ul>
                  <p>
                    Diasumsikan distribusi normal sehingga dipergunakan Z = (-2lnU<sub>i</sub>)<sup>&#189;</sup>{' '}
                    sin(2&pi;U
                    <sub>i+1</sub>) dan X = &#181;+&sigma;Z untuk memperoleh nilai variabel.
                  </p>
                </caption>

                <thead>
                  <tr>
                    <th>i</th>
                    <th>Bil. Acak</th>
                    <th>Nilai</th>
                  </tr>
                </thead>
                <tbody>
                  {dataBilanganAcakPelanggan.map((data, i) => {
                    return (
                      <tr key={i}>
                        <td>{data.i}</td>
                        <td>{data.bilAcak}</td>
                        <td>{data.nilai}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
