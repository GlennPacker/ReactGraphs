import './App.css';
import Nav from '../components/nav/Nav';
import Routes from './Routes';
import { useHistory } from 'react-router-dom';

function App() {
    const history = useHistory();

    const goHome = () => {
        history.push('/');
    }

    return (
        <div className="App">
            <h1 onClick={ goHome }>
                React-ChartJS-2
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
