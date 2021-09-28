import React from 'react'
import BarChart from '../Components/Dashboard/BarChart'
import BarChartHorizontal from '../Components/Dashboard/BarChartHorizontal'
import BoxAnalytic from '../Components/Dashboard/BoxAnalytic'
import RadarChart from '../Components/Dashboard/RadarChart'
import SourceMap from '../Components/Dashboard/SourceMap'
import SourceValue from '../Components/Dashboard/SourceValue'
let userAnalytic = [
    {
        key: 0,
        title: "Visitors",
        number: "24.532",
        dir: "asc",
        annual: "Weak",
        changeNumber: 14
    },
    {
        key: 1,
        title: "Activity",
        number: "63.200",
        dir: "desc",
        annual: "Annual",
        changeNumber: 12

    },
    {
        key: 2,
        title: "Real-Time",
        number: "1.320",
        dir: "desc",
        annual: "Monthly",
        changeNumber: 18

    },
    {
        key: 3,
        title: "Bounce",
        number: "12.364",
        dir: "asc",
        annual: "Yearly",
        changeNumber: 27
    }
]
function AdminDashboard() {
    return (
        <div className="dashboard">
            <section className="dashboard-analytic flex">
                <div className="dashboard-analytic-user">
                    {
                        userAnalytic?.map(box => (
                            <BoxAnalytic key={box.key} {...box}/>
                        ))
                    }
                </div>
                <div  className="dashboard-analytic-device">
                    <BarChart/>
                </div>
            </section>
            <section className="dashboard-source flex">
                <div className="dashboard-source-map">
                    <SourceMap/>
                </div>
                <div className="dashboard-source-value">
                    <SourceValue/>
                </div>
            </section>
            <section className="dashboard-traffic flex">
                <div className="dashboard-traffic-lang">
                    <BarChartHorizontal/>
                </div>
                <div className="dashboard-traffic-src">
                    <RadarChart/>
                </div>
            </section>
        </div>
    )
}

export default AdminDashboard
