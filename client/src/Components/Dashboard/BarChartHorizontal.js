import React from 'react'
import { Bar } from 'react-chartjs-2';

function BarChartHorizontal() {
    const data = {
        labels: ['USA', 'VietNam', 'China', 'France', 'UK', 'India', 'Sweden', 'FinLand'],
        datasets: [
          {
            data: [865, 240, 220, 162, 86, 32, 12, 2],
            backgroundColor:'rgb(71, 130, 218)',
            borderWidth: 0,
            barThickness: 10,
            borderRadius: 5
          },
        ],
      };
      
      const options = {
        indexAxis: 'y',
     
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
            display: false
          }
        },
        scales: {
            y: {
                grid:{
                    display:false
                }
            },
            x: {
                grid:{
                    display:false
                }
            },
        }
      };
      
    return (
        <>
            <h1 className='title'>Languages</h1>
            <Bar data={data} options={options} />
        </>
    )
}

export default BarChartHorizontal
