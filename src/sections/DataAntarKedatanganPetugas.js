import React, { Component } from "react";

export default class DataAntarKedatanganPetugas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zi: [],
      z01: [],
      zi1: [],
      Ui: [],
      Ui1: [],
      ln: [],
      sin: [],
      Z: [],
      X: []
    };
  }

  componentDidMount() {
    this.perhitunganZi();
    this.perhitunganZi1();
    this.perhitunganUi();
    this.perhitunganUi1();
    this.perhitunganln();
    this.perhitunganSin();
    this.perhitunganZ();
    this.perhitunganX();
  }

  perhitunganZi = () => {
    let a = 6102;
    let c = 6110;
    let Z0 = 1011;
    let m = 6132;

    for (let i = 0; i <= 25; i++) {
      Z0 = (a * Z0 + c) % m;
      let list = Array.from(this.state.zi);
      this.state.zi.push(Z0);
      this.setState({ list });
    }
    let listz01 = Array.from(this.state.z01);
    this.state.z01.push(this.state.zi[0]);
    this.setState({ listz01 });
  };

  perhitunganZi1 = () => {
    let a = 6102;
    let c = 6110;
    let Z01 = this.state.z01;
    let m = 6132;
    for (let i = 0; i < 26; i++) {
      Z01 = (a * Z01 + c) % m;
      let listz01 = Array.from(this.state.zi1);
      this.state.zi1.push(Z01);
      this.setState({ listz01 });
    }
  };

  perhitunganUi = () => {
    let Zi = this.state.zi;
    let m = 6132;
    for (let i = 0; i < 26; i++) {
      let u = Zi[i] / m;
      let list = Array.from(this.state.Ui);
      this.state.Ui.push(u.toFixed(3));
      this.setState({ list });
    }
  };

  perhitunganUi1 = () => {
    let zi1 = this.state.zi1;
    let m = 6132;
    for (let i = 0; i < 26; i++) {
      let u = zi1[i] / m;
      let list = Array.from(this.state.Ui1);
      this.state.Ui1.push(u.toFixed(3));
      this.setState({ list });
    }
  };

  perhitunganln = () => {
    let Ui = this.state.Ui;
    for (let i = 0; i < 26; i++) {
      let hasil = Math.sqrt(-2 * Math.log(Ui[i]));
      let list = Array.from(this.state.ln);
      this.state.ln.push(hasil.toFixed(3));
      this.setState({ list });
    }
  };

  perhitunganSin = () => {
    let Ui1 = this.state.Ui1;
    for (let i = 0; i < 26; i++) {
      let hasil = Math.sin(2 * Math.PI * Ui1[i]);
      let list = Array.from(this.state.sin);
      this.state.sin.push(hasil.toFixed(3));
      this.setState({ list });
    }
  };

  perhitunganZ = () => {
    let ln = this.state.ln;
    let sin = this.state.sin;
    for (let i = 0; i < 26; i++) {
      let hasil = ln[i] * sin[i];
      let list = Array.from(this.state.Z);
      this.state.Z.push(hasil.toFixed(3));
      this.setState({ list });
    }
  };

  perhitunganX = () => {
    let Z = this.state.Z;
    let rata2 = 8.3;
    let s_baku = 4.075;
    for (let i = 0; i < 26; i++) {
      let hasil = rata2 + s_baku * Z[i];
      let list = Array.from(this.state.X);
      this.state.X.push(hasil.toFixed(0));
      this.setState({ list });
    }
  };

  render() {
    const { zi, zi1, Ui, Ui1, ln, sin, Z, X } = this.state;

    return (
      <div>
        <div className="tablecontainer">
          <h6 align="left">
            <b>>> Tabel Variabel antar Kedatangan pelanggan</b>
          </h6>
          <p>
            Menggunakan deret bilangan acak yang dibangkitkan dengan metode
            Linear Congruential Generator dengan asumsi:
          </p>
          <ul>
            <li>Konstanta Pengali : 6102</li>
            <li>Konstanta Increment : 6110</li>
            <li>Konstanta Modulus : 6132</li>
            <li>Nilai Awal : 1011</li>
          </ul>
          <p>
            Diasumsikan distribusi normal sehingga dipergunakan Z = (-2lnU
            <sub>i</sub>)<sup>&#189;</sup> sin(2&pi;U
            <sub>i+1</sub>) dan X = &#181;+&sigma;Z untuk memperoleh nilai
            variabel.
          </p>
          <table>
            <thead>
              <tr>
                <th>i</th>
                <th>
                  Z<sub>i</sub>
                </th>
                <th>
                  Z<sub>i+1</sub>
                </th>
                <th>
                  U<sub>i</sub>
                </th>
                <th>
                  U<sub>i+1</sub>
                </th>
                <th>
                  (-2ln(U<sub>i</sub>))<sup>1/2</sup>
                </th>
                <th>
                  sin(2&pi;U<sub>i+1</sub>)
                </th>
                <th>Z</th>
                <th>X</th>
              </tr>
            </thead>

            <tbody>
              {zi.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{value}</td>
                    <td>{zi1[index]}</td>
                    <td>{Ui[index]}</td>
                    <td>{Ui1[index]}</td>
                    <td>{ln[index]}</td>
                    <td>{sin[index]}</td>
                    <td>{Z[index]}</td>
                    <td>{X[index]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
