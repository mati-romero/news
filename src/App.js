import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import Searcher from './component/Searcher';
import Layout  from './layout/Layout';
import News from './component/News';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Searcher/>}/>
          <Route exact path='/news' element={<News/>}/>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
