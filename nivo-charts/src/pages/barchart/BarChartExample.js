import React from 'react';
import { BarChart } from './BarChart';
import { GraphData } from './GraphData';

const BarChartExample = () => {
    return (
        <div>
            <h2>Line Graph</h2>
            <p>
                npm: @nivo/line
            </p>
            <div className="graph" style={{ height: '20em' }}>
                { BarChart({ data: GraphData }) }
            </div>
        </div>
    );
}

export default BarChartExample;
