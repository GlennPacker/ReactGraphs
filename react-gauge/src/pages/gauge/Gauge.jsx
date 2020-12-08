import GaugeChart from 'react-gauge-chart'

const Gauge = ({ value, width, label }) => {
    const chartStyle = { width: width || 350 }
    const formatedLabel =
        label ?
        (typeof label === 'function' ? label : () => label) :
        () => value;

    return (
        <div style={ chartStyle }>
            <GaugeChart
                style={ chartStyle }
                nrOfLevels={20}
                percent={ value }
                textColor={"#000"}
                arcPadding={0.10}
                cornerRadius={10}
                formatTextValue={ formatedLabel }
            />
        </div>
    );
}
export default Gauge;
