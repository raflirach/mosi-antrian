import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer orange">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">MOSI-3</h5>
                <p className="grey-text text-lighten-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, aliquam neque. Numquam ea
                  voluptatibus necessitatibus praesentium beatae magnam dolor minima doloribus!
                </p>
              </div>
              <div className="col l6 s12">
                <h5 className="white-text">Kelompok</h5>
                <ul>
                  <li>
                    <a className="white-text" href="#!">
                      10116102 - Mohammad Rizki Ramadhan
                    </a>
                  </li>
                  <li>
                    <a className="white-text" href="#!">
                      10116110 - Muhamad Ibnu Tri Yuono
                    </a>
                  </li>
                  <li>
                    <a className="white-text" href="#!">
                      10116132 - Rafli Rachmawandi
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              Made by Kelompok-
              <a
                className="orange-text text-lighten-3"
                href="https://github.com/ibnutriyuono/pemodelan-simulasi-antrian"
              >
                3
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
