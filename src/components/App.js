import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { noteData } from '../firebase/firebaseConnect'
import { connect } from 'react-redux'
import AlertInfo from './AlertInfo';
class App extends Component {
  showForm = () => {
    if (this.props.isEdit) {
      return <NoteForm saveNote={(note) => this.saveNote(note)} />
    }
  }

  saveNote = (note) => {
    noteData.push(note);
  }
  render() {
    // console.log(noteData)
    return (
      <div className="App">
        <AlertInfo />
        <Header />
        <div className="container">
          <div className="row">
            <NoteList />
            {
              this.showForm()
            }
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}

export default connect(mapStateToProps)(App)
