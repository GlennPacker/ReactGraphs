import React from 'react';
import Gauge from './Gauge';

const GaugeContainer = () => {
    return (
        <div>
            <h2>Gauge</h2>
            <Gauge
                label={ 'some text' }
                value={ .25 }
                width={ 300 }
            />

            <Gauge
                value={ .10 }
                width={ 300 }
                label={ val => `${val}%` }
            />

            <Gauge
                value={ .10 }
                width={ 300 }
            />
        </div>
     );
}

export default GaugeContainer;