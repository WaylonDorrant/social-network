import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  { message: "Hi, World !", id: 1 , likes:10},
  { message: "Im Bart Simpson", id: 2 , likes:2 },
  { message: "I Love Yall", id: 3 , likes:7 },

]

let dialogData = [
  { name: "Bill Gates", 
  message: "I created new chip Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eius explicabo aut inventore ad. Id in voluptates, laboriosam, nulla autem quod esse saepe mollitia iusto quia, temporibus reiciendis nobis cum.", id:1 },
  {name: "Elon Musk", message:"Go to the Mars", id:2},
  {name: "Jim Cary", message: "Im the best Comic", id:3},
  {name: "Jim Cary", message: "Im the best Comic", id:3},

]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} dialogData={dialogData} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
