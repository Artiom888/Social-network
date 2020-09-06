import React from 'react';
import classes from './../Dialogs.module.css';


export type MessageType = {
    id: number
    message: string

}
const Message = (props: MessageType) => {
    return (
        <div>
            <div className={classes.message}>{props.message}</div>
        </div>
    )
}
export default Message;