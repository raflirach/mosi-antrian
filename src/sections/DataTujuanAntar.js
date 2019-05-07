import React, { Component } from "react";

class DataTujuanAntar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zi: [],
      bilAcak: [],
      jalan: [],
      waktu: []
    };
  }

  componentDidMount() {
    this.perhitungaZi();
    this.perhitungaBilAcak();
    this.penentuanJalan();
  }

  perhitungaZi = () => {
    let a = 6132;
    let m = 6102;
    let bil = 110;
    for (let i = 0; i < 25; i++) {
      bil = (a * bil) % m;
      let list = Array.from(this.state.zi);
      this.state.zi.push(bil);
      this.setState({ list });
    }
  };

  perhitungaBilAcak = () => {
    let zi = this.state.zi;
    let m = 6102;
    for (let i = 0; i < 25; i++) {
      let bil2 = (zi[i] / m) * 10;
      let list = Array.from(this.state.bilAcak);
      this.state.bilAcak.push(bil2.toFixed(0));
      this.setState({ list });
    }
  };

  penentuanJalan = () => {
    let bilAcak = this.state.bilAcak;
    let jalan = "";
    let durasi = 0;
    for (let i = 0; i < 25; i++) {
      if (bilAcak[i] == 1) {
        jalan = "Jl. Nursijan";
        durasi = 10;
      } else if (bilAcak[i] == 2) {
        jalan = "Jl. Bapa Supi";
        durasi = 10;
      } else if (bilAcak[i] == 3) {
        jalan = "Jl. Wangsareja";
        durasi = 5;
      } else if (bilAcak[i] == 4) {
        jalan = "Jl. Paledang";
        durasi = 5;
      } else if (bilAcak[i] == 5) {
        jalan = "Jl. Lengkong Besar";
        durasi = 15;
      } else if (bilAcak[i] == 6) {
        jalan = "Jl. Lengkong Kecil";
        durasi = 10;
      } else if (bilAcak[i] == 7) {
        jalan = "Jl. Cikawao";
        durasi = 10;
      } else if (bilAcak[i] == 8) {
        jalan = "Jl. Karapitan";
        durasi = 10;
      } else if (bilAcak[i] == 9) {
        jalan = "Jl. Emong";
        durasi = 10;
      } else if (bilAcak[i] == 10) {
        jalan = "Jl. Jati";
        durasi = 10;
      }
      let list = Array.from(this.state.jalan);
      this.state.jalan.push(jalan);
      this.setState({ list });
      let list2 = Array.from(this.state.waktu);
      this.state.waktu.push(durasi);
      this.setState({ list2 });
    }
  };

  render() {
    const { bilAcak, jalan, waktu } = this.state;

    return (
      <div className="tablecontainer">
        <h6 align="left">
          <b>>> Tabel Variabel Tujuan Antar</b>
        </h6>
        <p>
          Menggunakan deret bilangan acak yang dibangkitkan dengan metode
          Multiplicative Generator dengan asumsi:
        </p>
        <ul>
          <li>Konstanta Pengali : 6132</li>
          <li>Konstanta Modulus : 6102</li>
          <li>Nilai Awal : 110</li>
        </ul>

        <table>
          <thead>
            <tr>
              <th>i</th>
              <th>Bil. Acak</th>
              <th>Hasil</th>
              <th>Waktu (menit)</th>
            </tr>
          </thead>
          <tbody>
            {bilAcak.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{data}</td>
                  <td>{jalan[i]}</td>
                  <td>{waktu[i]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataTujuanAntar;
