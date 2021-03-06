import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css";
import {Post, PostType} from "./Post/Post";

type MyPostsType = {
    posts: Array<PostType>
    addPost: () => void
    updateNewPostText: (newText: string) => void
    messageForNewPost: string

}

export function MyPosts(props: MyPostsType) {

    let postsElements = props.posts.map(post => <Post
        message={post.message}
        likesCount={post.likesCount}
        id={post.id}
    />)

    const onAddPost = () => {
        props.addPost()
    }

    const newPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
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
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

