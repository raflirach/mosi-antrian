import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

export default class GrafikDoughnut extends Component {
  render() {
    const data = {
      labels: this.props.labelArea,
      datasets: [
        {
          data: this.props.dataArea,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#273c75',
            '#e84118',
            '#dcdde1',
            '#fbc531',
            '#353b48',
            '#7f8fa6',
            '#c23616'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#273c75',
            '#e84118',
            '#dcdde1',
            '#fbc531',
            '#353b48',
            '#7f8fa6',
            '#c23616'
          ]
        }
      ]
    };
    return (
      <div>
        <Doughnut data={data} />
      </div>
    );
  }
}
