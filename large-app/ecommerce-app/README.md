## E-commerce app

Uses React, Redux, Node.js, MongoDB

Tutorial: https://www.youtube.com/watch?v=_pkBqnyxY0w&list=PLeh2GWv22bmQHOAYllM8ycm3obDexyoLg

Demo: https://react-shopping-cart-final.herokuapp.com/

Code: https://github.com/basir/react-shopping-cart

Has local storage use, connect, redux dev tools usage, async await

Ecommerce page: http://localhost:3000/ 

For setup, put in .env file in root folder

```
MONGODB_USERNAME = 'sha***'
MONGODB_PASSSWORD = 'yn***p5'
CLUSTER_URL = 'cluster0***'
```
Get these from memos doc, search "mongo"


Start server

``` npm run server```

On postman, sent GET request to:

``` http://localhost:5000/api/products ```

``` http://localhost:5000/ ```

Run client app

``` npm run start```

To store data in the DB:
- Open Postman and under body -> raw -> JSON, paste in data.json without ids at POST /api/products
- See https://www.youtube.com/watch?v=g2bR7cKX4Mg&list=PLeh2GWv22bmQHOAYllM8ycm3obDexyoLg&index=11&ab_channel=CodingwithBasir
20:30 section

## TODO
Add in admin section by looking at Github code
