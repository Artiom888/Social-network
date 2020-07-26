import React from "react";
import classes from "./Post.module.css";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export function Post(props: PostType) {
    return (
        <div className={classes.item}>
            <div>
                <img
                    src={"https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"}/>
                <span>
                    {props.message}
                </span>
                <div>
                    like {props.likesCount}
                </div>
            </div>
        </div>
    )
}