import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CurrentView from './features/current/CurrentView';
import HourView from './features/hour/HourView';
import DayView from './features/day/DayView';
import { SpeedInsights } from '@vercel/speed-insights/react';

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
      <SpeedInsights />
    </div>
  );
}

export default App;