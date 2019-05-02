This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Reusable React components for our portal

## Install
```
npm i --save git+https://git@github.com/alphillips/portal-components.git
```

## Use
```
import {Header, Footer} from "portal-components";

<Header />

<Footer />
```


## Write a component
Create a new folder under lib for your component. Also create a .js file and a test.
Add any other CSS or SVG files.
e.g.
```
lib
  |__ YourComponent
         |___YourComponent.js
         |___YourComponent.test.js
         |___your-component.css
```

Add your component to the src/index.js
```
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import YourComponent from './YourComponent/YourComponent.js'

export {Header, Footer, YourComponent}
```
