import React from 'react'
import { Bar } from 'react-chartjs-2';


const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Mobile',
        data: [54, 67, 41, 55, 62, 45,55, 73, 60, 76, 48, 79],
        backgroundColor:'rgb(71, 130, 218)',
        borderWidth: 0,
        borderRadius: 10,
        barThickness: 10

        
      },
      {
        label: 'Desktop',
        data: [69, 66, 24, 48, 52, 51,44, 53, 62, 79, 51, 68],
        backgroundColor:'rgb(194 214 243)',
        borderWidth: 0,
        borderRadius: 3,
        barThickness: 10
        

      }
    ],
  };
  const option = {
    responsive: true,
    plugins: {
        legend: {
          display: false
        }
    },
    scales: {
        y: {
            stacked: true,
            grid:{
                display:false
            }
        },
        x: {
            stacked: true,
            grid:{
                display:false
            }
        },
    }

  };
function BarChart() {
    return (
        <>
         <h1 className='title'>Mobile / Desktop</h1>
         <Bar data={data} options={option} />
        </>
    )
}

export default BarChart
