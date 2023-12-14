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
