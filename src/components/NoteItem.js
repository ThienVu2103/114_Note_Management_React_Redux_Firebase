import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteItem extends Component {

    editFunction = () => {
        this.props.changeEditStatus()
        // console.log(this.props.note)
        this.props.getEditData(this.props.note);
    }
    delNote = (id) => {
        this.props.delNote(id);
    }
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" >
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href={"#note" + this.props.index} aria-expanded="true" aria-controls="noteContent1">
                            {this.props.title}
                        </a>
                    </h5>
                    <div className="btn-group float-right">
                        <button type="button" className="btn btn-warning mr-1" onClick={() => this.editFunction()}>
                            <i className="fa fa-edit">Edit</i>
                        </button>
                        <button type="button" className="btn btn-danger" onClick={(id) => this.delNote(this.props.note.id)}>
                            <i className="fa fa-trash" > Delete</i>
                        </button>
                    </div>

                </div>
                <div id={"note" + this.props.index} className="collapse in" role="tabpanel" >
                    <div className="card-body">
                        {this.props.content}
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.isEdit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({ type: "CHANGE_EDIT_VIEW" })
        },
        getEditData: (editObject) => {
            dispatch({
                type: "GET_EDIT_DATA",
                editObject
            })
        },
        delNote: (id) => {
            dispatch({
                type: "DEL_NOTE",
                id
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)