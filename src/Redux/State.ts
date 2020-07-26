export const subscribe = (observer: ()  => void) => {
    onChange = observer
}

let onChange = () => {
    console.log('State is changed')
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}
export type DialogsPageType = {
    newMessageText: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type RootStateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
}

export let state: RootStateType = {
    ProfilePage: {
        newPostText: "",
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 3},
            {id: 2, message: "It's my first post", likesCount: 7},
            {id: 3, message: "Blabla", likesCount: 20},
            {id: 4, message: "Dada", likesCount: 50}
        ]
    },
    DialogsPage: {
        newMessageText: "",
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    }
}

export const addPost = (postText: string) => {

    const newPost: PostType = {
        id: new Date().getTime(),
        message: postText,
        likesCount: 0
    };
    state.ProfilePage.posts.push(newPost);
    onChange();
}

export const addMessage = (messageText: string) => {
    debugger;
    const newMessage: MessageType = {
        id: new Date().getTime(),
        message: messageText,
    }
    state.DialogsPage.messages.push(newMessage);
    onChange();
}

export const changeNewPostCallback = (newText: string) => {
    state.ProfilePage.newPostText = newText;
    onChange();
}

export const changeNewMessageCallback = (newMessage: string) => {
    state.DialogsPage.newMessageText = newMessage;
    onChange();
}



export default state;