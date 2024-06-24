import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import SignUp from './components/SignUp';
import Search from './components/Search';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

import React from 'react';
function App() {
  return (

    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Login" Component={Login} />
        <Route path="/SignUp" Component={SignUp} />
        <Route path="/Search" Component={Search} />

        <Route path="/Register" Component={Register} />
      </Routes>
    </div>
  );
}

export default App;
