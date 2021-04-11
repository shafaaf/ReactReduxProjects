import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {FilterableProductTable} from './components/FilterableProductTable';
import {PRODUCTS} from './data'

ReactDOM.render(<FilterableProductTable products={PRODUCTS}/>, document.getElementById('root'));
