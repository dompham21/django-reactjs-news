import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './Redux/configureStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

import 'antd/dist/antd.css';
import './Styles/styles.scss'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/effect-fade/effect-fade.min.css"
import 'highlight.js/styles/github.css';
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
 
,document.getElementById('root')
);
