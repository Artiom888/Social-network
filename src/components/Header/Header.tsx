import React from "react";
import classes from "./Header.module.css";

type HeaderType = {

}

export function Header(props:HeaderType) {
    return (
        <header className={classes.header}>
            <img src={"https://klike.net/uploads/posts/2019-06/1560664221_1.jpg"} />
        </header>
    )
}