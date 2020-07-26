import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./Redux/State";
import {addMessage, addPost, changeNewMessageCallback, changeNewPostCallback, RootStateType} from "./Redux/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";


const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                appState={state}
                addPostCallback={addPost}
                addMessageCallback={addMessage}
                changeNewPostCallback={changeNewPostCallback}
                changeNewMessageCallback={changeNewMessageCallback}
            />
        </BrowserRouter>, document.getElementById('root'));
}

renderTree()
subscribe(renderTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
