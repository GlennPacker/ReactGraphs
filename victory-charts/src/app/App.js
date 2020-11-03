import './App.css';
import Nav from '../components/nav/Nav';
import Routes from './Routes';

function App() {
    return (
        <div className="App">
            <h1>
                Victory
            </h1>
            <div style={{ display: 'flex', flexDirection: 'row'}} >
                <div style={{ flex: 'none', width: '10em' }} >
                    <Nav />
                </div>
                <div style={{ flexGrow: 1, textAlign: 'left' }}>
                    <Routes />
                </div>
            </div>
        </div>
    );
}

export default App;
