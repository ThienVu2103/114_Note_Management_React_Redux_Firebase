import { noteData } from '../firebase/firebaseConnect';

var redux = require('redux');

const noteInitialState = {
    isEdit: false,
    editItem: {},
    isAdd: false,
    isAlert: false
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            noteData.push(action.note);
            return state;
        case "CHANGE_EDIT_VIEW":
            return { ...state, isEdit: !state.isEdit, editItem: {} }
        case "CHANGE_ADD_VIEW":
            return { ...state, isAdd: !state.isAdd }
        case "GET_EDIT_DATA":
            return { ...state, editItem: action.editObject }
        case "UPDATE_NOTE":
            console.log("complete " + JSON.stringify(action.note));
            noteData.child(action.note.id).update({
                title: action.note.title,
                content: action.note.content
            })
            return { ...state, editItem: {} }
        case "DEL_NOTE":
            noteData.child(action.id).remove();
            return state;
        case "ALERT_ON":
            return { ...state, isAlert: true };
        case "ALERT_OFF":
            return { ...state, isAlert: false };
        default:
            return state
    }
}

var store = redux.createStore(allReducer);
store.subscribe(() => {
    console.log(JSON.stringify(store.getState()))
})
export default store;