import React, { Component } from 'react';

export default class DataAntarKedatanganPetugas extends Component {
  constructor(props) {
    super(props);
    this.state = { zi: [], z01: [], Zi1: [], dataTabel: {} };
  }

  componentDidMount() {
    this.perhitunganZi();
    this.perhitunganZi1();
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
    console.log(this.state.dataTabel);

    // let hasil = Array.from(this.state.dataTabel);
    // this.state.dataTabel.push(this.state.zi);
    // this.setState({ hasil });
  };

  perhitunganZi1 = () => {
    let a = 6102;
    let c = 6110;
    let Z01 = 308;
    let m = 6132;
    for (let i = 0; i < 26; i++) {
      Z01 = (a * Z01 + c) % m;
      let listz01 = Array.from(this.state.Zi1);
      this.state.Zi1.push(Z01);
      this.setState({ listz01 });
    }
    let hasil = Array.from(this.state.dataTabel);
    this.state.dataTabel.push(this.state.Zi1);
    this.setState({ hasil });
    // console.log(this.state.dataTabel);
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="tablecontainer">
            <h6 align="left">
              <b>>> Tabel Variabel antar Kedatangan pelanggan</b>
            </h6>
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
              Diasumsikan distribusi normal sehingga dipergunakan Z = (-2lnU
              <sub>i</sub>)<sup>&#189;</sup> sin(2&pi;U
              <sub>i+1</sub>) dan X = &#181;+&sigma;Z untuk memperoleh nilai variabel.
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
                {this.state.dataTabel.map((data, i) => {
                  data.map(e => {
                    console.log(e);
                    return (
                      <tr key={i}>
                        <td>{i}</td>
                        <td>{e[0]}</td>
                      </tr>
                    );
                  });
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
