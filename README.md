# ecommerce-website
# ****I. Setup steps****
### 1. Create root folder: ecommerce-website
### 2. add frontend and backend folders
### 3. create src folder in frontend
### 4. create index.html in src
### 5. run npm init in frontend folder to install package.json
### 6. run npm install -D live-server to install development packages
### 7. add "start": "live-server src --verbose" in script section of package.json
### 8. run npm start to launch the local server

<br/>

# ****II. Design Frontend website****
### 1. create style.css
### 2. link style.css to index.html
### 3. crete div-grid container
### 4. create header main and footer
### 5. style html, body
### 6. style grid container, header, main and footer

<br/>

# ****III. Create static home screen****
### 1. create ul.products
### 2. create li
### 3. create div.product
### 4. add .product-image, product-brand, product-name, product-price
### 5. style ul.products and inner divs
### 6. duplicate 2 items to show 3 products

<br/>

# ****IV. Render dynamic home screen****
### 1. create data.js
### 2. export an array of 6 products
### 3. create screen/homeScreen.js
### 4. export homeScreen with rendor() ###    method and implement it
### 5. import data.js
### 6. return products mapped to lis inside ul
### 7. create app.js
### 8. link it to index.html as module
### 9. set main id to main_container
### 10. create router() function
### 11. set main_container innerHTML to homeScreen.js 
### 12. set load event of window to router() function

<br>

# ****V Build URL Router****
### 1. crete route as route:screen object for home screen
### 2. create util.js
### 3. export parseRequestURL
### 4.set url as hash address split by slash
### 5. return resource, id and verb of url
### 6. update router
### 7. set request as parseRequestURL()
### 8. build parsedUrl and compare with routes 
### 9. if route exixts render it, else render error 404
### 10. create screens/Error404.js and render error message

<br/>

# ****VI Create Node.js  Server, #nodeproject****
### 1. create backend folder
### 2. run npm init in root folder
### 3. npm install express
### 4. create server.js
### 5. add start commnad as node backend/server.js
### 6. require express
### 7. move data.js from frontend to backend
### 8. create route for /api/products
### 9. return products in data.js
### 10. run npm start

<br>

# ****VII Load Products from backend****
### 1. edit HomeScreen.js
### 2. make render async
### 3. fetch product from '/api/products' in render() 
### 4. make router async and call await HomeScreen.render()
### 5. use cors on backend

<br>

# ****Add webpack****
### 1. cd into frontend 
### 2. npm install -D webpack webpack-dev-server webpack-cli
### 3. uninstall live-server from frontend
### 4. add "start": "webpack-dev-server --mode development --watch-content-base --opne" to package.json of frontend
### 5. move index.html style.css images to frontend
### 6. rename app.js to index.js
### 7. update index.js with script src main.js
### 8. install axios to frontend 
### 9. change fetch to axios in homescreen
