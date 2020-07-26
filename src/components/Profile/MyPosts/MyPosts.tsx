import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css";
import {Post, PostType} from "./Post/Post";

type MyPostsType = {
    posts: Array<PostType>
    addPostCallBack: (postText: string) => void
    messageForNewPost: string
    changeNewPostCallback: (newtText: string) => void
}


export function MyPosts(props: MyPostsType) {


    let postsElements = props.posts.map(post => <Post
        message={post.message}
        likesCount={post.likesCount}
        id={post.id}
    />)


    const addPost = () => {
        props.addPostCallBack(props.messageForNewPost)
        props.changeNewPostCallback("")
    }

    const newPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewPostCallback(e.currentTarget.value)

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

