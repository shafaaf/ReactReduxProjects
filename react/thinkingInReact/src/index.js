import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {FilterableProductTable, PRODUCTS} from './filterableProductTable';


ReactDOM.render(<FilterableProductTable products={PRODUCTS}/>, document.getElementById('root'));
