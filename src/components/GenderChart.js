import React from 'react';
import { Chart } from 'react-google-charts';
import Moment from 'react-moment';
import m from 'moment';

import Data from '../dataSets/MEGA.json';

class GenderChart extends React.Component {
  state = {
    chartData: {},
    arrayLength: Object.keys(Data).length,
    generation: 0,
    currentDate: '2006'
  }

  componentDidMount() {
    this.generateData();
    
  };

  generateData = () => {
    let arrValue = [];
    let arrKeys = [];

    Object.keys(Data).forEach(function (key) {
      arrValue.push(Data[key].sort())
      arrKeys = Object.keys(Data)
    }); 

    setInterval(() => {
      if (this.state.generation < this.state.arrayLength) {
        let tabLine = arrValue[this.state.generation];
        tabLine.unshift(['Country', 'Percentage',  
          { 
            sourceColumn: 3 ,
            role: 'annotation',
            type: 'string',
          },
          {
            role: 'style'
          }
        ]); 
        var day = m.unix(arrKeys[this.state.generation]).utc();

        this.setState({ generation: this.state.generation + 1, chartData: tabLine, currentDate: day })
      }
    }, 1200)
  };

  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
        <Moment format="YYYY" style={{ 
            fontSize: '11rem', 
            position: 'absolute', 
            zIndex: '99',
            top: '21rem',
            right: '3.5rem',
            color: '#3c3c3c'
             }}>
          {this.state.currentDate}
        </Moment>
        <Chart
          width={'100%'}
          height={'550px'}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={this.state.chartData}
          options={{
            chartArea: {
              width: '75%',
              height: '80%',
            },
            colors: ['#8e0152', '#276419'],
            pointSize: 1,
            animation: {
              duration: 1200,
              easing: 'linear',
              startup: true,
            },
            vAxis: {
            },
            hAxis: {
              viewWindow: {
                max: 0.35,
              },
              format: 'percent',
              title: 'Gender pay gap (Source: Eurostat)',
            },
            legend: { position: 'none' },
            enableInteractivity: false,
            annotations: {
              alwaysOutside: true
            }
          }}
          rootProps={{ 'data-testid': '1' }}
        />
        </div>
    )
  }
};

export default GenderChart;