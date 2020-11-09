import React from 'react';

const Home = () => {
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'column' }}>
                <a href="//github.com/highcharts/highcharts" target="github">Github</a>
                <a href="//www.highcharts.com/blog/tutorials/highcharts-wrapper-for-react-101/" target="docs">React Wrapper Documentation</a>
                <a href="//www.highcharts.com/" target="docs">Full Docs</a>
                <div>
                    <strong>Install:</strong>
                    npm install highcharts highcharts-react-official
                </div>
            </div>
        </div>
     );
}

export default Home;