import {noteData} from '../firebase/firebaseConnect';

var redux = require('redux');

const noteInitialState = {}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_NOTE":
        console.log("complete, " + action.note)
        noteData.push(action.note)

        return state
        default:
        return state
    }
}

var store = redux.createStore(allReducer);

export default store;