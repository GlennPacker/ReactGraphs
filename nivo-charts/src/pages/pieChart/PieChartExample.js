import React from 'react';
import { PieChart } from './pieChart';
import { pieData } from './pieData';

const PieChartExample = () => {
    return (
        <div>
            <h2>Pie Chart</h2>
            <p>
                npm: @nivo/api
            </p>
            <div className="graph"  style={{ height: '20em' }}>
                { PieChart({ data: pieData }) }
            </div>
        </div>
     );
}

export default PieChartExample;