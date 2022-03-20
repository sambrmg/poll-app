import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Poll from './components/Poll';
import User from './components/User';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Poll />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
