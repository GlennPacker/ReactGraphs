import React from 'react';
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import { graphData } from './GraphData';

const LineGraphExample = () => {
    return (
        <div>
            <h2>Line Graph</h2>
            <div style={{ height: '20em' }}>
                <VictoryChart
                    theme={ VictoryTheme.material }
                    width={1400}
                >
                    {
                        graphData.map((graph, index) => <VictoryLine
                            key={index}
                            style={{ data: { stroke: graph.color } }}
                            data={graph.data}
                            interpolation="monotoneX"
                            name={ graph.id }
                        />)
                    }
                </VictoryChart>
            </div>
        </div>
    );
}

export default LineGraphExample;