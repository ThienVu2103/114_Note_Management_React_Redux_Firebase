import React, { Component } from 'react';
import {connect} from  'react-redux';

class Header extends Component {
    handleAdd = (event) => {
        event.preventDefault();
        this.props.ShowAddNoteForm();
        this.props.changeAddStatus();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <a className="navbar-brand" href="">ThienVu</a>
                <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a onClick={(event) => this.handleAdd(event)} className="nav-link" href="">Add Note</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ShowAddNoteForm: () => {
            dispatch({
                type: "CHANGE_EDIT_VIEW"
            })
        },
        changeAddStatus: () => {
            dispatch({
                type: "CHANGE_ADD_VIEW"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)