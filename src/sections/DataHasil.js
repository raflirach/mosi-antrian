import React, { Component } from 'react';

let dataTabelSimulasi = require('../data/dataTabelSimulasi.json');
class DataHasil extends Component {
  render() {
    return (
      <div className="fixed_header pad">
        <table>
          <thead>
            <tr>
              <td rowSpan={3} className="center">
                No
              </td>
              <td colSpan={3} className="center">
                Bilangan acak yang dibangkitkan
              </td>
              <td colSpan={11} className="center">
                Simulasi
              </td>
            </tr>
            <tr>
              <td className="center">Antar kedatangan pelanggan</td>
              <td className="center">Lama Cuci</td>
              <td className="center">Tujuan antar</td>
              <td className="center">Antar kedatangan pelanggan (menit)</td>
              <td className="center">Kumulatif kedatangan pelanggan (menit)</td>
              <td className="center">Lama cuci (menit)</td>
              <td className="center">Waktu persiapan antar (menit)</td>
              <td className="center">Waktu selesai dilayani (menit)</td>
              <td className="center">Tujuan antar</td>
              <td className="center">Waktu tempuh (menit)</td>
              <td className="center">Total waktu pelayanan</td>
              <td className="center">Petugas pengantar</td>
              <td className="center">Waktu menunggu pelanggan (menit)</td>
              <td className="center">Waktu menunggu petugas (menit)</td>
            </tr>
            <tr>
              <td className="center">A</td>
              <td className="center">B</td>
              <td className="center">C</td>
              <td className="center">D</td>
              <td className="center">E</td>
              <td className="center">F</td>
              <td className="center">G</td>
              <td className="center">H</td>
              <td className="center">I</td>
              <td className="center">J</td>
              <td className="center">K</td>
              <td className="center">L</td>
              <td className="center">M</td>
              <td className="center">N</td>
            </tr>
          </thead>
          <tbody>
            {dataTabelSimulasi.map((data, i) => {
              let datas = data.i * data.hasil;
              console.log(datas);
              return (
                <tr key={i}>
                  <td className="center">{data.i}</td>
                  <td className="center">{data.bilAcak}</td>
                  <td className="center">{data.bilAcakPencucian}</td>
                  <td className="center">{data.bilanganAcakTujuan}</td>
                  <td className="center">{data.nilai}</td>
                  <td />
                  <td />
                  <td className="center">{data.waktuPersiapan}</td>
                  <td />
                  <td className="center">{data.hasil}</td>
                  <td className="center">{data.waktu}</td>
                  <td />
                  <td className="center">{data.petugas}</td>
                  <td className="center">{data.waktuTunggu}</td>
                  <td className="center">{data.waktuTungguPetugas}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataHasil;
