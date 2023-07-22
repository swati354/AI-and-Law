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

app.post('/family', async (req,res) => {
    const prompt = `I want you to take the role of a highly regarded Indian Lawyer in family law, known for your extensive experience 
    and expertise in handling a wide range of family law matters. Your reputation stems from years of successfully assisting individuals 
    and families in navigating complex family law issues. Today, a client seeks your guidance and support in a family law matter. 
    Assit them ans be as precise and informative as possible.Write the answer in points under each heading.
    Format the answer by starting each point with '##' and the subpoints with digits so that it is easy to read.
    Remember not to mention that you are a lawyer in the answer. 
    1.	Nature of the Family Law Issue:
    2.	Applicable Laws and Legal Framework:
    3.	Initiating Legal Proceedings:
    4.	Required Documentation:
    5.	Alternative Dispute Resolution: 
    6.	Time Limitations(if any):
    7.	Where to seek further guidance:
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
        const data = await response.json()
        res.send(data);
    }catch(error){
        console.error(error); 
    }
})

app.post('/children', async (req,res) => {
    const prompt = `I want to take te role of a highly respected and experienced Indian lawyer renowned for your expertise in children's
    laws. You have dedicated your career to advocatng for the rights and well-being of children, and
    have successfully assisted numerous individuals facing child-related legal issues. Today, a concerned
    individual seeks your guidance and support regarding a children law matter. 
    Assit them ans be as precise and informative as possible.Write the answer in points under each heading.
    Format the answer by starting each point with '##' and the subpoints with digits so that it is easy to read.
    Remember not to mention that you are a lawyer in the answer.
    1.Rights Violated and Applicable Laws:
    2.Where to File the Complaint:
    3.Documents Required:
    4.Time Limitaton (if any):
    5.Where to Seek Further Guidance:
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
        const data = await response.json()
        res.send(data);
    }catch(error){
        console.error(error); 
    }
})

app.post('/intellectualProperty', async (req,res) => {
    const prompt = `I want you to take the role of a highly regarded Indian lawyer in intellectual property law, known for your extensive knowledge
    and successful track record in protecting and enforcing intellectual property rights. You have been
    assistng individuals and businesses in intellectual property matters for many years. Today, a client 
    has approached you seeking your guidance in an intellectual property issue.
    Assit them ans be as precise and informative as possible.Write the answer in points under each heading.
    Format the answer by starting each point with '##' and the subpoints with digits so that it is easy to read.
    Remember not to mention that you are a lawyer in the answer.

    1. Type of Intellectual Property and Applicable Laws:
    2. Protection and Enforcement Measures:
    3. Where to File Complaint:
    4. Essential Documents and Evidence:
    5. Time Limitations (if any):
    6. Where to Seek Further Guidance:
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
        const data = await response.json()
        res.send(data);
    }catch(error){
        console.error(error); 
    }
})

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
        const data = await response.json(); 
        // console.log(data);
        res.send(data);
    }catch(error){
        console.error(error);
    }
})



app.post('/getDocuments', async (req,res) => {
    const prompt = `Summarize the documents required to obtain the below certificate in India in number points.
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
        const data = await response.json()
        res.send(data);
    }catch(error){
        console.error(error);
    }
})

app.listen(PORT, () => console.log('Your server is running on PORT ' + PORT));