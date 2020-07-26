import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {RootStateType} from "./Redux/State";

type AppType = {
    appState: RootStateType
    addPostCallback: (postText: string) => void
    addMessageCallback: (postText: string) => void
    changeNewPostCallback: (newText: string) => void
    changeNewMessageCallback: (newMessage: string) => void
}

export function App  (props: AppType)  {

    return (
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path='/profile' render={() => <Profile
                        profilePage={props.appState.ProfilePage}
                        addPostCallBack={props.addPostCallback}
                        messageForNewPost={props.appState.ProfilePage.newPostText}
                        changeNewPostCallback={props.changeNewPostCallback}
                    />} />
                    <Route path='/dialogs' render={() => <Dialogs
                        localState={props.appState.DialogsPage}
                        addMessageCallback={props.addMessageCallback}
                        changeNewMessageCallback={props.changeNewMessageCallback}
                        textForNewMessage={props.appState.DialogsPage.newMessageText}
                    />} />
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
    );
}





