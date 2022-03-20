import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Poll from './components/Poll';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/:id' element={<Poll />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
