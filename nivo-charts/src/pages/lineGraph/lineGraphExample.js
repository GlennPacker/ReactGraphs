import React from 'react';
import { graphData } from './GraphData';
import { LineGraph } from './LineGraph';

const LineGraphExample = () => {
    return (
        <div>
            <h2>Line Graph</h2>
            <p>
                npm: @nivo/line
            </p>
            <div className="graph" style={{ height: '20em' }}>
                { LineGraph({ data: graphData }) }
            </div>
        </div>
    );
}

export default LineGraphExample;
