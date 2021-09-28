import React from 'react'
import { Doughnut, Pie } from "react-chartjs-2";
 const chartColors = [
   "#f44337",
   "#ff9801",
   "#4882da"
  ];
function SourceValue() {

    const data = {
        labels: ["Direct", "Search Engines", "Social"],
        datasets: [
          {
            data: [164, 125, 260],
            backgroundColor: chartColors,
            hoverBackgroundColor: chartColors,
            hoverBorderWidth: 0
          }
        ],
        text: "test",
    };

    const options = {
        maintainAspectRatio: true,
        reponsive: true,
        plugins: {
            legend: {
              display: true,
              position: "bottom"
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: (tooltipItem) => {
                    let sum = 0;
                    let dataset = tooltipItem.dataset.data;

                    dataset.map(data => {
                      sum += Number(data);
                    });
                    let percentage = (tooltipItem.raw * 100 / sum).toFixed(2) + '%';
                    return `${percentage}`;
                  }
                },
                displayColors: false
            },
        },
        elements: {
            arc: {
                borderWidth: 5
            }
        }
        
    };

    return (
        <>
            <div className="title">Source / Medium</div>
            <Pie id="1" data={data} options={options} />
            {/* <table className="table">
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Revenue</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Social</th>
                        <td>260</td>
                        <td className="asc">+35%</td>
                    </tr>
                    <tr>
                        <th>Search Engines</th>
                        <td>125</td>
                        <td className="desc">-12%</td>
                    </tr>
                    <tr>
                        <th>Direct</th>
                        <td>164</td>
                        <td className="asc">+46%</td>
                    </tr>
                </tbody>
            </table> */}
        </>
    )
}

export default SourceValue
