const express = require('express');
const cors = require('cors');
require('dotenv').config()
const PORT = 8000;

const app = express();
//we cant parse over json from the frontend to the backend unless
//we have this 
app.use(express.json());
app.use(cors());

const API_KEY = process.env.API_KEY;

app.post('/completions', async (req,res) => {
    const prompt = `I want you to take the role of a very famous Indian lawyer. You specialize mainly in laws related to women. 
    You've been assisting women who come to you for help for over 10 years now. 
    A women has come to you asking for help. Below is her question. Assist her by providing the following details 
    and be as precise and informative as possible.Format the answer by starting each point with '##' and the subpoints with digits so that it is easy to read.
    Remember not to mention that you are a lawyer in the answer. 
    1. The rights violated and laws applicable
    2. Where to file the complaint
    3. Documents required
    4. Time limitation(if any)
    5. Where to seek further guidance
    question:`;
    const question = prompt + req.body.message;
    const options = {
        method : "POST",
        headers: {
            "Authorization" : `Bearer ${API_KEY}`,
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            model : "gpt-3.5-turbo",
            messages: [{role : "user", content: question}],
            max_tokens : 600
        })
    }
    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions', options);
        // const changedRes =  response.split('*').join("\r\n");
        const data = await response.json();
        res.send(data);
    }catch(error){
        console.error(error);
    }
})



app.post('/getDocuments', async (req,res) => {
    const prompt = `Summarize the documents required to obtain the below certificate in India in bullet points.
    Document:`;
    const question = prompt + req.body.message;
    const options = {
        method : "POST",
        headers: {
            "Authorization" : `Bearer ${API_KEY}`,
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            model : "gpt-3.5-turbo",
            messages: [{role : "user", content: question}],
            max_tokens : 300
        }) 
    }
    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions', options);
        // const changedRes =  response.split('*').join("\r\n");
        const data = await response.json()
        res.send(data);
    }catch(error){
        console.error(error);
    }
})

app.listen(PORT, () => console.log('Your server is running on PORT ' + PORT));