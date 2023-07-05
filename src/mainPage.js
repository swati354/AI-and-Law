import React from "react";
import Chat from './chat';
import Document from './document';
import {Routes, Route, useNavigate} from 'react-router-dom';

const MainPage = () => {

    const navigate = useNavigate();
    const navigateToChat = () => {
        navigate('/chat');
      };
    
      const navigateToDocuments = () => {
        navigate('/document');
      };

    return (
        <div className="centerBox">
            <div className="heading">LegalMind</div>
            <p>Two ways to start!</p>
            <div className="optionButtons">
                <button className="clickButton" onClick = {navigateToDocuments}>Documents</button>
                <button className="clickButton" onClick = {navigateToChat}>Chat</button>
            </div>
            <Routes>
              <Route path='/document' element={<Document />} />
              <Route path='/chat' element={<Chat />} />
          </Routes>
        </div>
    )
}

export default MainPage;