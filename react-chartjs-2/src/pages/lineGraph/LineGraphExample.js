import React from 'react';
import { graphData } from './GraphData';
import { Line } from 'react-chartjs-2'

const LineGraphExample = () => {
    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            label: 'Ring Ground Floor',
            data: [12, 19, 3, 5, null, 2, 3],
            fill: false,
            backgroundColor: 'rgba(255, 99, 132, 1)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            hitRadius: 5,
            pointRadius: '0'
          },
          {
            label: 'Ring First Floor',
            data: [12, 2, 13, 8, 2, 4, 3.5],
            fill: false,
            backgroundColor: 'rgb(0, 255, 0)',  // point color
            borderColor: 'rgba(0, 255, 0, 0.2)', // line color
            hitRadius: 7,
          },
        ],
      }

      const options = {
        legend: {
            position: 'right'
        },
        tooltips: {
            mode: 'index',
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }


    return (
        <div>
            <h2>React-ChartJs-2 Graph</h2>

            <ul>
                <li>ignores container sizing could cause layout issues or pain. Seems to play nice with flexbox on grow but does nothing on shrinking screen but refresh and it looks ok.</li>
            </ul>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '80vw', marginLeft: 'auto', marginRight: 'auto' }}>
                <div style={{ flexShrink: 0}}>
                    some other content
                </div>
                <div style={{ flexGrow: 1 }}>
                    <Line
                        data={data}
                        options={options}
                    />
                </div>

                <div style={{ flexShrink: 0}}>
                    some other content
                </div>
            </div>

        </div>
    );
}

export default LineGraphExample;
