import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {GiftExpertApp} from './GiftExpertApp';
import './index.css';

// ReactDOM.render(
//     <GiftExpertApp />,
//   document.getElementById('root')
// );


const divRoot = document.querySelector('#root');




//Ahora con react 18
const root = createRoot(divRoot);
root.render(<GiftExpertApp/>);
