import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    name: string
    id: number
}
export const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <img src={"https://sun9-49.userapi.com/impf/REJ2pjap8dz_bqwtOqKB74FolR0QrJVYJ6t4PA/woE5dlyk4_Q.jpg?size=200x0&quality=90&sign=f3f66c4afcbd0842db50041c863bfb0f&ava=1"} />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

