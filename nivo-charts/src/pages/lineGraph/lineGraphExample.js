import React from 'react';
import { graphData } from './graphData';
import { LineGraph } from './lineGraph';

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
