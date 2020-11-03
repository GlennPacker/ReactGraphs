import React from 'react';

const Home = () => {
    return (
        <div>
            <div>Home</div>
            <div style={{display: 'flex', flexDirection: 'column' }}>
                <a href="//github.com/FormidableLabs/victory" target="github">Github</a>
                <a href="//formidable.com/open-source/victory/docs" target="docs">Documentation</a>
                <div>
                    install: npm i --save victory
                </div>
            </div>
        </div>
     );
}

export default Home;