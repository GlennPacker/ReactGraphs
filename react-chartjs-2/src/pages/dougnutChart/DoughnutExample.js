import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-labels';

const DoughnutExample = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
          },
        ],
      }

      const options = {
        legend: {
            position: 'right'
        },
        plugins: {
            labels: [
              {
                render: 'percentage',
                position: 'border'
              }
            ]
          }
      }

    return (
        <div>
            <h2>Dougnut</h2>
            <div>
                more label options available at <a href="https://emn178.github.io/chartjs-plugin-labels/samples/demo/"> here</a>
            </div>
            <div style={{width: '30em', marginTop: '2em'}}>
                <Doughnut data={data} options={options} />
            </div>
        </div>
     );
}

export default DoughnutExample;