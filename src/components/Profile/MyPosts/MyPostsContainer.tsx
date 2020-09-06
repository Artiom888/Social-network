import React from "react";
import {addPostActionCreator, changeNewPostActionCreator} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";


type MyPostsType = {
}

function MyPostsContainer(props: MyPostsType) {

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState()
                const addPost = () => {
                    store.dispatch(addPostActionCreator(state.ProfilePage.newPostText))
                }

                const newPostChangeHandler = (newText: string) => {
                    store.dispatch(changeNewPostActionCreator(newText))
                }
                return <MyPosts
                    addPost={addPost}
                    updateNewPostText={newPostChangeHandler}
                    posts={state.ProfilePage.posts}
                    messageForNewPost={state.ProfilePage.newPostText}
                />
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;
