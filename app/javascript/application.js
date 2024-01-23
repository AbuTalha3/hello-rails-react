import React from 'react'
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import Greeting from "./component/Greeting";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
