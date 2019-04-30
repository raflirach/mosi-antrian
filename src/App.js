import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Intro from './sections/Intro';
import DataPengamatan from './sections/DataPengamatan';
import GrafikPengamatan from './sections/GrafikPengamatan';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Intro />
        <DataPengamatan />
        <GrafikPengamatan />
      </div>
    );
  }
}
