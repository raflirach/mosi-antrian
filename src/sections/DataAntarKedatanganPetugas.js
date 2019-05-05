import React, { Component } from 'react';

export default class DataAntarKedatanganPetugas extends Component {
  constructor(props) {
    super(props);
    this.state = { zi: [], z01: [] };
  }

  componentDidMount() {
    this.perhitunganZi();
  }

  perhitunganZi = () => {
    let a = 6102;
    let c = 6110;
    let Z0 = 1011;
    let m = 6132;

    Z0 = (a * Z0 + c) % m;
    this.setState(prevState => ({
      zi: [...prevState.zi, Z0]
    }));
    console.log(this.state.zi);
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
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
