import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {DialogItemType, DialogItem} from "./DialogItem/DialogItem";
import Message, {MessageType} from "./Message/Message";
import {ActionsType} from "../../Redux/Store";
import {addMessageActionCreator, changeNewMessageCreator} from "../../Redux/DialogsReducer";


type DialogsPageType = {
    dialogs: Array<DialogItemType>

}
type DialogMessagePageType = {
    messages: Array<MessageType>


}

type DialogsType = {
    localState: DialogsPageType & DialogMessagePageType
    textForNewMessage: string
    dispatch: (action: ActionsType) => void
    store: any

}
export const Dialogs = (props: DialogsType) => {

    let dialogElements = props.localState.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.localState.messages.map(message => <Message message={message.message}
                                                                             id={message.id}/>)


    const newMessage = () => {
        props.dispatch(addMessageActionCreator(props.textForNewMessage))
    }
    const newMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value
        props.dispatch(changeNewMessageCreator(newMessage))
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder={"Enter your message"}
                                   value={props.textForNewMessage}
                                   onChange={newMessageChangeHandler}></textarea></div>
                    <div><button onClick={newMessage}>Send</button></div>
                </div>
            </div>

        </div>
    )
}

