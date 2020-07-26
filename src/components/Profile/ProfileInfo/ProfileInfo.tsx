import React from "react";
import classes from "./ProfileInfo.module.css";

type ProfileInfoType = {}

export function ProfileInfo(props: ProfileInfoType) {
    return (
        <div>
            <div>
                <img src={"https://resheto.net/images/mater/kartinka_motivatsiya_tsitata_9.jpg"}/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}