import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {DialogItemType, DialogItem} from "./DialogItem/DialogItem";
import Message, {MessageType} from "./Message/Message";


type DialogsPageType = {
    dialogs: Array<DialogItemType>

}
type DialogMessagePageType = {
    messages: Array<MessageType>

}

type DialogsType = {
    localState: DialogsPageType & DialogMessagePageType
    addMessageCallback: (postText: string) => void
    changeNewMessageCallback: (newMessage: string) => void
    textForNewMessage: string
}
export const Dialogs = (props: DialogsType) => {

    let dialogElements = props.localState.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.localState.messages.map(message => <Message message={message.message}
                                                                             id={message.id}/>)


    const newMessage = () => {
        props.addMessageCallback(props.textForNewMessage)
        props.changeNewMessageCallback("")
    }
    const newMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessageCallback(e.currentTarget.value)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea value={props.textForNewMessage} onChange={newMessageChangeHandler}></textarea>
                <div>
                    <button onClick={newMessage}>Send</button>
                </div>
            </div>

        </div>
    )
}

