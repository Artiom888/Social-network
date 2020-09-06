import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css";
import {Post, PostType} from "./Post/Post";
import {ActionsType} from "../../../Redux/Store";
import {addPostActionCreator, changeNewPostActionCreator} from "../../../Redux/ProfileReducer";

type MyPostsType = {
    posts: Array<PostType>
    messageForNewPost: string
    dispatch: (action: ActionsType) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export function MyPosts(props: MyPostsType) {

    let postsElements = props.posts.map(post => <Post
        message={post.message}
        likesCount={post.likesCount}
        id={post.id}
    />)

    const addPost = () => {
        // props.dispatch(addPostActionCreator(props.messageForNewPost))

        props.addPost()
    }

    const newPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        // props.dispatch(changeNewPostActionCreator(newText))

        props.updateNewPostText(newText)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.messageForNewPost} onChange={ newPostChangeHandler }></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

