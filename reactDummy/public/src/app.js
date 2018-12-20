import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './components/MainApp';


import 'normalize.css/normalize.css';
import './styles/styles.scss';


let appRoot = document.getElementById("app");
let template = <MainApp />
ReactDOM.render(template, appRoot);
