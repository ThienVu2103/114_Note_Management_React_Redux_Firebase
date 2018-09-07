import { noteData } from '../firebase/firebaseConnect';

var redux = require('redux');

const noteInitialState = {
    isEdit: false,
    editItem: {}
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            noteData.push(action.note);
            return state;
        case "CHANGE_EDIT_VIEW":
            return { ...state, isEdit: !state.isEdit }
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

        default:
            return state
    }
}

var store = redux.createStore(allReducer);
store.subscribe(() => {
    console.log(JSON.stringify(store.getState()))
})
export default store;