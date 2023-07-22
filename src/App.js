import React from 'react';
import Chat from './chat';
import Document from './document';
import FamilyLaw from './familyLaw';
import ChildrenLaw from './childrenLaw';
import IntellectualProperty from './intellectualProperty';
import MainPage from './mainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Routes>
              <Route path='/' exact element={<MainPage />} />
              <Route path='/document' element={<Document />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='/familyLaw' element={<FamilyLaw />} />
              <Route path='/childrenLaw' element={<ChildrenLaw />} />
              <Route path='/intellectualProperty' element={<IntellectualProperty />} />
          </Routes>
      </Router>
  );
}

export default App;
