import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {

}

export function Profile(props: ProfileType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}