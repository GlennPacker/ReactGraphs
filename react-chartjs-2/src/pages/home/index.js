import React from 'react';

const Home = () => {
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'column' }}>
                <a href="//github.com/jerairrest/react-chartjs-2" target="github">Github</a>
                <a href="//jerairrest.github.io/react-chartjs-2/#/" target="docs">React Wrapper Documentation</a>
                <a href="//www.chartjs.org/docs" target="docs">Chart JS Documentation (has all the chart options)</a>
                <div>
                    <strong>Install:</strong> npm install --save react-chartjs-2 chart.js<br/>
                    <strong>Pie Chart Labels</strong> npm install chartjs-plugin-labels
                </div>
            </div>
        </div>
     );
}

export default Home;