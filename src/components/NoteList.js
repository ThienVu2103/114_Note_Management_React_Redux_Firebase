import React, { Component } from 'react';
import { noteData } from '../firebase/firebaseConnect';
import NoteItem from './NoteItem';

class NoteList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listNotes: []
        }
    }

    componentWillMount = () => { // prepare data for display as table, list, etc.
        noteData.on('value', (notes) => {
            var listNote = [];
            notes.forEach(element => {
                const key = element.key;
                const title = element.val().title;
                const content = element.val().content;
                listNote.push({
                    id: key,
                    title: title,
                    content: content
                })
            });
            // console.log(listNote);
            this.setState({
                listNotes: listNote
            });
        });
    }

    getData = () => {

        if (this.state.listNotes) {
            return this.state.listNotes.map((value, index) => {
                return (
                    <NoteItem
                        key={index} 
                        note={value}
                        title = {value.title} 
                        content = {value.content}
                        index={index} />
                )
            })
        }
    }

    render() {
        return (

            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    {
                        this.getData()
                    }
                </div>
            </div>

        );
    }
}

export default NoteList;