import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import QuestionarioContainer from './pages/questionario/questionariocontainer';

ReactDOM.render(
  <React.StrictMode>
    <QuestionarioContainer />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
