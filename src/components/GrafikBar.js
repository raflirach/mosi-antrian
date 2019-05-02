import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export default class GrafikBar extends Component {
  render() {
    const data = {
      labels: this.props.labelArea,
      datasets: [
        {
          label: this.props.labelGraph,
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: this.props.dataArea
        }
      ]
    };
    return (
      <div>
        <h2>{this.props.judul}</h2>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}
