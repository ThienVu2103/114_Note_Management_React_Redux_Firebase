import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import {noteData} from '../firebase/firebaseConnect'

class App extends Component {
  saveNote = (note) => {
    noteData.push(note);
  }
  render() {
    // console.log(noteData)
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <div className="row">
              <NoteList/>
              <NoteForm saveNote={(note) => this.saveNote(note)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
