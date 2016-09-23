import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./FE/store"
var Route = require('./FE/components/rounting/Route');

const app = document.getElementById('main');

ReactDOM.render(Route, app);

