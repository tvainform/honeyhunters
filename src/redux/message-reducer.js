const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    newNameText: "",
    newEmailText: "",
    newMessageText: "",
    messageData: [
        {
            id: 1,
            name: "Вася",
            email: "vasya@mail.ru",
            message: "Сообщение от Василия Пупкина.",
        },
        {
            id: 2,
            name: "Маруся",
            email: "marusya@mail.ru",
            message: "Всем привет, я Маруся",
        },
        {
            id: 3,
            name: "Вася",
            email: "vasya@mail.ru",
            message: "Сообщение от Василия Пупкина.",
        },
        {
            id: 4,
            name: "Маруся",
            email: "marusya@mail.ru",
            message: "Всем привет, я Маруся",
        },
        {
            id: 5,
            name: "Вася",
            email: "vasya@mail.ru",
            message: "Сообщение от Василия Пупкина.",
        }]
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return{
                ...state,
                newNameText: "",
                newEmailText: "",
                newMessageText: "",
                messageData: [...state.messageData, {id: 6, name: state.newNameText, email: state.newEmailText, message: state.newMessageText}]
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newNameText: action.newText,
            }
        }
        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default messageReducer;
