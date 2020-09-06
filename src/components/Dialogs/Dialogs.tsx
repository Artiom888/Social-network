import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {DialogItemType, DialogItem} from "./DialogItem/DialogItem";
import Message, {MessageType} from "./Message/Message";

type DialogsType = {
    changeNewMessageCreator: (newMessage: string) => void
    newMessage: () => void
    textForNewMessage: string
    DialogsPage: any
}
export const Dialogs = (props: DialogsType) => {
    let state = props.DialogsPage

    let dialogElements = state.dialogs.map((dialog: DialogItemType) => <DialogItem name={dialog.name}
                                                                                   id={dialog.id}/>)
    let messagesElements = state.messages.map((message: MessageType) => <Message
        message={message.message}
        id={message.id}/>)


    const newMessage = () => {
        props.newMessage()
    }
    const newMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value
        props.changeNewMessageCreator(newMessage)

    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea placeholder={"Enter your message"}
                                  value={props.textForNewMessage}
                                  onChange={newMessageChangeHandler}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={newMessage}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

