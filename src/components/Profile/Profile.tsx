import React from "react";
import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";

type ProfileType = {
    profilePage: ProfilePageType
    addPostCallBack: (postText: string) => void
    messageForNewPost: string
    changeNewPostCallback: (newText: string) => void
}

export function Profile(props: ProfileType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPostCallBack={props.addPostCallBack}
                     messageForNewPost={props.messageForNewPost}
                     changeNewPostCallback={props.changeNewPostCallback}
            />
        </div>
    )
}