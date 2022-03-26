import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Poll from './components/Poll/Poll';
import PollCreate from './components/Poll/PollCreate';
import SignUp from './components/Login/SignUp';
import SignIn from './components/Login/SignIn';
import Home from './components/Home';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/p/:id' element={<Poll />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='*' element={<NotFound />} />

        <Route element={<PrivateRoute />}>
          <Route path="/create-poll" element={<PollCreate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
