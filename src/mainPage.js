import React from "react";
import Chat from './chat';
import Document from './document';
import FamilyLaw from './familyLaw';
import ChildrenLaw from './childrenLaw';
import IntellectualProperty from './intellectualProperty';
import {Routes, Route, useNavigate} from 'react-router-dom';

const MainPage = () => {

    const navigate = useNavigate();
    const navigateToChat = () => { 
        navigate('/chat');
      };
    
      const navigateToDocuments = () => {
        navigate('/document');
      };

      const navigateToFamilyLaw = () => { 
        navigate('/familyLaw');
      };

      const navigateToChildrenLaw = () => { 
        navigate('/childrenLaw');
      };

      const navigateToIntellectualProperty = () => { 
        navigate('/intellectualProperty');
      };

    return (
        <div className="centerBox">
            <div className="heading">LegalMind</div>
            {/* <p>Two ways to start!</p> */}
            <div className="optionButtons">
                <button className="clickButton" onClick = {navigateToDocuments}>Documents</button>
                <button className="clickButton" onClick = {navigateToChat}>Women Law</button>
                <button className="clickButton" onClick = {navigateToFamilyLaw}>Civil Law</button>
                <button className="clickButton" onClick = {navigateToChildrenLaw}>Children's Law</button>
                <button className="clickButton" onClick = {navigateToIntellectualProperty}>Intellectual Property</button>
            </div>
            <Routes>
              <Route path='/document' element={<Document />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='/familyLaw' element={<FamilyLaw />} />
              <Route path='/childrenLaw' element={<ChildrenLaw />} />
              <Route path='/intellectualProperty' element={<IntellectualProperty />} />
          </Routes> 
        </div>
    )
}

export default MainPage;