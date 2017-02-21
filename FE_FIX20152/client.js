import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import Layout from "./components/Layout"
import store from "./store"

const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}>
  <Layout
    state={store.getState()}
    store={store}
    user={store.getState().user.user}
    fetched={store.getState().user.fetched}
    tweets={store.getState().tweets.tweets} />
</Provider>, app);
