import './App.scss';
import Filters from '../filters/Filters';
import FlightList from '../flightsList/FlightsList';

function App() {
  return (
    <div className="App">
      <main className="App__container">
        <Filters />
        <FlightList />
      </main>
    </div>
  );
}

export default App;
