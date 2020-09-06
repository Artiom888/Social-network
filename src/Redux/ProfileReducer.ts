import {ActionsType, PostType, ProfilePageType} from "./Store";

type InitialStateType = {
    newPostText: string
    posts: Array<PostType>
}

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 3},
        {id: 2, message: "It's my first post", likesCount: 7},
        {id: 3, message: "Blabla", likesCount: 20},
        {id: 4, message: "Dada", likesCount: 50}
    ],
    newPostText: ""
}

const profileReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = ''
            return state;
        case "CHANGE-NEW-POST":
            state.newPostText = action.newText;
            return state;
        default:
            return state
    }
}
export const addPostActionCreator = (postText: string) => {
    return {
        type: "ADD-POST",
        postText: postText
    } as const
}
export const changeNewPostActionCreator = (newText: string) => {
    return {
        type: "CHANGE-NEW-POST",
        newText: newText
    } as const
}

export default profileReducer;