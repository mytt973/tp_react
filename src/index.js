import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Block from './components/Block';
import NewTache from './components/NewTache';

const data={
  block:{
    btn:"supprimer",
    p:"grehoerpz zuh zpr zpryepf yzefyzoef zief zieozeufepçf ayepç fyPRYZEP9 Z",
    radio:["Faire les cource du moi ","Aller chez le medecin"],
    isRad:false
  },
  nt:{
    radio:["basse ","normal","haut"],
    btn:"enregister",
    isRad:true  
  }

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <main>
  <h1>Ma Todolist</h1>
  <Block block={data.block} />
<div>________________________________________________________________________</div>
  <NewTache newT={data.nt}/>
 </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
