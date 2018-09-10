import React, { Component } from 'react';
import { connect } from 'react-redux';
class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            id: ''
        };
    }

    changeTitle = () => {
        if(this.props.isAdd) {
            return <h3>Add Note</h3>
        } else {
            return <h3>Edit Note</h3>
        }
    }
    
    componentWillMount = () => {
        console.log(this.props.note)// from store
        if (this.props.note) { // In case Edit Note, we have data for target note
            this.setState({ // Update state of NoteForm
                title: this.props.note.title,
                content: this.props.note.content,
                id: this.props.note.id
            });
        }
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
        if (this.state.id) { // update
            var noteUpdate = {};
            noteUpdate.title = title;
            noteUpdate.content = content;
            noteUpdate.id = this.state.id;
            this.props.updateNoteEdit(noteUpdate);
            this.props.alerOn();
        } else { // add new note
            var note = {};
            note.title = title;
            note.content = content;
            // var a = JSON.stringify(note);
            this.props.addDataStore(note); // su dung reducer trong store;
            this.props.alerOn();
        }
        this.props.disableForm();
    }

    render() {
        // noteData.once("value").then((snapshot) => {
        //     console.log(snapshot.val())
        // }).catch((err) => {
        //     console.log(err)
        // });

        return (
            <div className="col-4">
                {this.changeTitle()}
                <form>
                    <div className="form-group">
                        <input defaultValue={this.props.note.title} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="title" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <textarea onChange={(event) => this.isChange(event)} type="text" className="form-control" name="content" id="noteContent" aria-describedby="helpIdnoteContent" placeholder="Content" defaultValue={this.props.note.content} />
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
        note: state.editItem,
        isAdd: state.isAdd
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (note) => {
            dispatch({
                type: "ADD_NOTE",
                note
            })
        },
        updateNoteEdit: (note) => {
            dispatch({
                type: "UPDATE_NOTE",
                note
            })
        },
        disableForm: () => {
            dispatch({
                type: "CHANGE_EDIT_VIEW"
            })
        },
        alerOn: () => {
            dispatch({
                type: "ALERT_ON"
            })
        },
        alerOff: () => {
            dispatch({
                type: "ALERT_OFF"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
