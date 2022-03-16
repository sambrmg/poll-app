import './App.css';
import { Routes, Route } from 'react-router-dom';
import Poll from './components/Poll';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Poll />} />
      </Routes>
    </div>
  );
}

export default App;
