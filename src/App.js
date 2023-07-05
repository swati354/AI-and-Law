import React from 'react';
import Chat from './chat';
import Document from './document';
import MainPage from './mainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Routes>
              <Route path='/' exact element={<MainPage />} />
              <Route path='/document' element={<Document />} />
              <Route path='/chat' element={<Chat />} />
          </Routes>
      </Router>
  );
}

export default App;
