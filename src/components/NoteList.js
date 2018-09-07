import React, { Component } from 'react';
import {noteData} from '../firebase/firebaseConnect';

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
        console.log(this.state.listNotes)
    }

    render() {
        return (
            
            <div className="col">
            {
                this.getData()
            }
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    <div className="card">
                        <div className="card-header" role="tab" id="note1">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#noteList" href="#noteContent1" aria-expanded="true" aria-controls="noteContent1">
                                    21/01/1999
                                </a>
                            </h5>
                        </div>
                        <div id="noteContent1" className="collapse in" role="tabpanel" aria-labelledby="note1">
                            <div className="card-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deleniti officiis earum ratione, voluptate consectetur libero
                                accusamus repudiandae debitis atque voluptatibus aspernatur accusantium dolore, minus repellendus
                                porro magni autem! Reiciendis?
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" role="tab" id="note2">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#noteList" href="#noteContent2" aria-expanded="true" aria-controls="noteContent2">
                                    21/01/1999
                                </a>
                            </h5>
                        </div>
                        <div id="noteContent2" className="collapse in" role="tabpanel" aria-labelledby="note2">
                            <div className="card-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deleniti officiis earum ratione, voluptate consectetur libero
                                accusamus repudiandae debitis atque voluptatibus aspernatur accusantium dolore, minus repellendus
                                porro magni autem! Reiciendis?
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default NoteList;