import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {FilterableProductTable, PRODUCTS} from './components/filterableProductTable';


ReactDOM.render(<FilterableProductTable products={PRODUCTS}/>, document.getElementById('root'));
