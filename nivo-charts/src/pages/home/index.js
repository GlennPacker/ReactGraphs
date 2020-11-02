import React from 'react';

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <div style={{display: 'flex', flexDirection: 'column' }}>
                <a href="//github.com/plouc/nivo" target="github">Github</a>
                <a href="//nivo.rocks/" target="docs">Documentation</a>
            </div>
        </div>
     );
}

export default Home;