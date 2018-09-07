import React, { Component } from 'react';
// import {noteData} from '../firebase/firebaseConnect';
// import * as firebase from 'firebase';
import { connect } from 'react-redux';
class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };
    }

    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    saveFunction = (title, content) => {
        /*
        var item = {};
        item.title = title;
        item.content = content;
        //send to app. 
        console.log("Save button" + item.title + item.content);
        this.props.saveNote(item);

        */

        var note = {};
        note.title = title;
        note.content = content;
        // var a = JSON.stringify(note);
        this.props.addDataStore(note); // su dung reducer trong store;

    }

    render() {
        // noteData.once("value").then((snapshot) => {
        //     console.log(snapshot.val())
        // }).catch((err) => {
        //     console.log(err)
        // });

        return (
            <div className="col-4">
                <h3>Edit Note Content</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Title</label>
                        <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="title" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Title" />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Enter your title</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Title</label>
                        <textarea onChange={(event) => this.isChange(event)} type="text" className="form-control" name="content" id="noteContent" aria-describedby="helpIdnoteContent" placeholder="Content" defaultValue={""} />
                        <small id="helpIdnoteContent" className="form-text text-muted">Enter your content</small>
                    </div>
                    <input onClick={() => this.saveFunction(this.state.title, this.state.content)} type="reset"
                        className="btn btn-primary btn-lg btn-block" value="Save" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (note) => {
            dispatch({
                type: "ADD_NOTE",
                note
            })
        }
    }
}
//this.props.addDataStore()

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
