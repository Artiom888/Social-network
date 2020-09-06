import profileReducer, {addPostActionCreator, changeNewPostActionCreator} from "./ProfileReducer";
import dialogsReducer, {addMessageActionCreator, changeNewMessageCreator} from "./DialogsReducer";

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
export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (observer: ()  => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof changeNewPostActionCreator> |
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof changeNewMessageCreator>

const store: StoreType = {
    _state: {
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
    },
    _callSubscriber () {
        console.log('State is changed')
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action)

        this._callSubscriber();
    }
}

export default store;

