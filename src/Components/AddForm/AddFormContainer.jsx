import {addMessageActionCreator} from "../../redux/message-reducer";
import {updateNewMessageTextActionCreator} from "../../redux/message-reducer";
import {connect} from "react-redux";
import AddForm from "./AddForm";


let mapStateToProps = (state) => {
    return {
        messages: state.messagePage,
        newNameText: state.messagePage.newNameText,
        newEmailText: state.messagePage.newEmailText,
        newMessageText: state.messagePage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: ()=>{
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (text)=>{
            dispatch(updateNewMessageTextActionCreator(text))
        },
    }
}
const AddFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddForm);

export default AddFormContainer;
