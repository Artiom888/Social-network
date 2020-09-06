import React from 'react';
import {addMessageActionCreator, changeNewMessageCreator} from "../../Redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

type DialogsType = {
}

const DialogsContainer = (props: DialogsType) => {

    return <StoreContext.Consumer>
        {
        (store) => {
            let state = store.getState().DialogsPage

            const onNewMessage = () => {
                store.dispatch(addMessageActionCreator(state.newMessageText))
            }
            const onNewMessageChangeHandler = (newMessage: string) => {
                store.dispatch(changeNewMessageCreator(newMessage))
            }
            return <Dialogs
                changeNewMessageCreator={onNewMessageChangeHandler}
                newMessage={onNewMessage}
                DialogsPage={state}
                textForNewMessage={state.newMessageText}
            />
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;

