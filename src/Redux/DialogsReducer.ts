import {ActionsType, DialogsPageType, DialogType, MessageType, PostType} from "./Store";

type InitialStateType = {
    newMessageText: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

let initialState: InitialStateType = {
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
    ],
    newMessageText: ""
}

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.messageText,
            }
            state.messages.push(newMessage);
            state.newMessageText=''
            return state
        case "CHANGE-NEW-MESSAGE":
            state.newMessageText = action.newMessage;
            return state
        default:
            return state
    }
}
export const addMessageActionCreator = (messageText: string) => {
    return {
        type: "ADD-MESSAGE",
        messageText: messageText
    } as const
}
export const changeNewMessageCreator = (newMessage: string) => {
    return {
        type: "CHANGE-NEW-MESSAGE",
        newMessage: newMessage
    } as const
}

export default dialogsReducer;