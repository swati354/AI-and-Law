import React from "react";
import Chat from './chat';
import Document from './document';
import FamilyLaw from './familyLaw';
import ChildrenLaw from './childrenLaw';
import IntellectualProperty from './intellectualProperty';
// import companyLogo from '.public/images/patrick-fore-H5Lf0nGyetk-unsplash.jpg';
import { Routes, Route, useNavigate } from 'react-router-dom';

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
      <div className="firstBox">
        <img src="images/patrick-fore-H5Lf0nGyetk-unsplash.jpg" alt="BigCo Inc. logo" />
        <div className="heading">LegalMind</div>
      </div>
      {/* <p>Two ways to start!</p> */}
      {/* <div className="optionButtons">
                <button className="clickButton" onClick = {navigateToDocuments}>Documents</button>
                <button className="clickButton" onClick = {navigateToChat}>Women Law</button>
                <button className="clickButton" onClick = {navigateToFamilyLaw}>Civil Law</button>
                <button className="clickButton" onClick = {navigateToChildrenLaw}>Children's Law</button>
                <button className="clickButton" onClick = {navigateToIntellectualProperty}>Intellectual Property</button>
            </div> */}
      <div className="secondBox">

        <div className="subBox">
          <div className="content1">
            <div className="containerbackground1"> WOMEN </div>
            <div className="lawName1" onClick={navigateToChat}>Women Law</div>
            <div className="examples">
              <p>Example :</p>
              <p>
                I experienced harassesment at my workplace
              </p>
              <p>
                Unequal pay
              </p>
            </div>

          </div>
          <div className="imageDiv">
            <img src="images/one.jpg" alt="BigCo Inc. logo" />
          </div>
        </div>


        <div className="subBox">
          <div className="imageDiv">
            <img src="images/two.jpg" alt="BigCo Inc. logo" />
          </div>
          <div className="content2">
            <div className="containerbackground2"> CHILDREN </div>
            <div className="lawName2" onClick={navigateToChildrenLaw}>Children Law</div>
            <div className="examples">
              <p>Example :</p>
              <p>
                I experienced harassesment at my workplace
              </p>
              <p>
                Unequal pay
              </p>
            </div>

          </div>
        </div>

      </div>
      <div className="secondBox">
        <div className="subBox">
          <div className="content1">
            <div className="containerbackground1"> FAMILY</div>
            <div className="lawName1" onClick={navigateToChat}>Family Law</div>
            <div className="examples">
              <p>Example :</p>
              <p>
                I experienced harassesment at my workplace
              </p>
              <p>
                Unequal pay
              </p>
            </div>

          </div>
          <div className="imageDiv">
            <img src="images/three.jpg" alt="BigCo Inc. logo" />
          </div>
        </div>

        <div className="subBox">
          <div className="imageDiv">
            <img src="images/four.jpg" alt="BigCo Inc. logo" />
          </div>
          <div className="content2">
            <div className="containerbackground2"> IP RIGHTS</div>
            <div className="lawName2" onClick={navigateToChildrenLaw}>IP Law</div>
            <div className="examples">
              <p>Example :</p>
              <p>
                I experienced harassesment at my workplace
              </p>
              <p>
                Unequal pay
              </p>
            </div>

          </div>
        </div>


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