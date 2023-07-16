import { useState, useEffect } from "react";
import parse from 'html-react-parser';

const Chat = () => {
  const [value, setValue] = useState(null);
  const [message, setMessage] = useState(null);
  const[previousChats, setPreviousChats] = useState([]);
  const[currentTitle, setCurrentTitle] = useState(null);

  const createNewChat = () =>{
    setMessage(null);
    setValue("");
    setCurrentTitle(null);
  }

  const handleClick = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle);
    setMessage(null);
    setValue("");
  }

  const getMessages = async () => {
    const options = {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        message : value
      })
    }
    try{
        const response = await fetch('http://localhost:8000/completions', options);
        const data = await response.json();
        const ans = data.choices[0].message.content;
        const role = data.choices[0].message.role;
        console.log(ans);
        
        var showdown  = require('showdown'),
        converter = new showdown.Converter(),
        html      = converter.makeHtml(ans);
        // console.log(html);
        
        setMessage({role : role, content : html});
    }catch(error){
      console.error(error);
    }
  }

  // console.log(message);
  //whenever message changes this will run
  useEffect(() => {
    // console.log(currentTitle, value, message);
    if(!currentTitle && value && message)
    {
      setCurrentTitle(value);
    }
    if(currentTitle && value && message)
    {
      setPreviousChats(previousChats => (
        //open previousChats and add two objects
      [...previousChats, {
          title: currentTitle,
          role : "user",
          content : value
      },{
        title: currentTitle,
        role : message.role,
        content : message.content
      }]
      ))
    }
  }, [message, currentTitle])

  // console.log(previousChats);

  const currentChat = previousChats.filter(previousChat => previousChat.title === currentTitle);
  const uniqueTitles = Array.from(new Set(previousChats.map(previousChat => previousChat.title)));
  // console.log(uniqueTitles);

  return (
    <div className="app">

      <section className="side-bar">
        <button onClick = {createNewChat}>+ New chat</button>
        <ul className="history">
          {uniqueTitles?.map((uniqueTitle,index) => <li key = {index} onClick={() => handleClick(uniqueTitle)}>{uniqueTitle}</li>)}
        </ul>
        <nav>
          <p>Happy searching</p>
        </nav>
      </section>

      <section className="main">
        {/* it will be displayed only when there is no currentTitle  */}
        {!currentTitle && <h1>LegalMind</h1>}
        <ul className="feed">
          {currentChat?.map((chatMessage, index) => <li key = {index}>
            <p className="role">{chatMessage.role}</p>
            <p>{parse(chatMessage.content)}</p>
          </li>)}
        </ul>
        <div className="bottom-container">
          <div className="input-container">
            {/* initially value of the input would be value which initially is null  */}
            {/* e is the event  */}
            <input value = {value} onChange={(e) => setValue(e.target.value)}/>
            <div id = "submit" onClick={getMessages}>&#10146;</div>
          </div>
          <p className="info">
          Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT May 24 Version
          </p>
        </div> 
      </section>
    </div>
  )
}

export default Chat;
