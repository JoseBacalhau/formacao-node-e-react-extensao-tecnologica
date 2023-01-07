import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './screens/Login'
import Cadastro from './screens/Cadastro';
import Home from './screens/Home'

function App() {

    return  (
      // Rotas
      <Router>
          <Routes>
              <Route index element={<Login/>} />
              <Route path="/cadastro" element={<Cadastro/>} />
              <Route path="/home" element={<Home/>} />
          </Routes>
      </Router>
    );
}

export default App;