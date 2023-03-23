import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CurrentView from './features/current/CurrentView';
import HourView from './features/hour/HourView';
import DayView from './features/day/DayView';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<CurrentView/>} />
          <Route path='/hours' element={<HourView/>} />
          <Route path='/days' element={<DayView/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;