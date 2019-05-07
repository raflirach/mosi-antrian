import React, { Component } from "react";

let dataTabelSimulasi = require("../data/dataTabelSimulasi.json");
class DataHasil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zi1: [],
      zi2: [],
      Ui1: [],
      Ui2: []
    };
  }

  componentDidMount() {
    this.perhitunganZi(6102, 6110, 1011, 6132, this.state.zi1);
    this.perhitunganUi(this.state.zi1, 6132, this.state.Ui1);
    this.perhitunganZi(6110, 6132, 1011, 6102, this.state.zi2);
    this.perhitunganUi(this.state.zi2, 6102, this.state.Ui2);
  }

  perhitunganZi = (a, c, Z0, m, target) => {
    for (let i = 0; i <= 25; i++) {
      Z0 = (a * Z0 + c) % m;
      let list = Array.from(target);
      target.push(Z0);
      this.setState({ list });
    }
  };

  perhitunganUi = (zi, m, target) => {
    for (let i = 0; i < 26; i++) {
      let u = zi[i] / m;
      let list = Array.from(target);
      target.push(u.toFixed(3));
      this.setState({ list });
    }
  };

  render() {
    const { Ui1, Ui2 } = this.state;
    return (
      <div className="fixed_header pad tablecontainer">
        <h6 align="left">
          <b>>> Tabel Simulasi</b>
        </h6>
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
              return (
                <tr key={i}>
                  <td className="center">{data.i}</td>
                  <td className="center">{Ui1[i]}</td>
                  <td className="center">{Ui2[i]}</td>
                  <td className="center">{data.bilanganAcakTujuan}</td>
                  <td className="center">{data.nilai}</td>
                  <td className="center">{data.antarKedatanganPelanggan}</td>
                  <td className="center">{data.lamaCuci}</td>
                  <td className="center">{data.waktuPersiapan}</td>
                  <td className="center">{data.waktuSelesai}</td>
                  <td className="center">{data.hasil}</td>
                  <td className="center">{data.waktu}</td>
                  <td className="center">{data.totalWaktu}</td>
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
