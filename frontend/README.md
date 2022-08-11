Installed:

    npm install react-router-dom@6
    npm install --save-dev --save-exact prettier
    npm install redux react-redux @reduxjs/toolkit
    npm install @mui/material @emotion/react @emotion/styled @material-ui/icons @mui/icons-material

Added 

    .prettierrc

Added to package.json:
    
    "proxy": "http://localhost:3000"
    
    and under "scripts": 
        "start": "PORT=4000 react-scripts start"

#101

    changed favicon

    added mui AppBar

    redux:

        features/user.js

        import { configureStore } from "@reduxjs/toolkit";
        import { Provider } from "react-redux";
        import userReducer from "./features/user";
        import { BrowserRouter } from "react-router-dom";

        generally set up index.js for redux



updates for heroku
