import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';

class AlertInfo extends Component {
    render() {
        if (this.props.isAlert) {
            return (
                <AlertContainer>
                    <Alert type="info">Notification</Alert>
                </AlertContainer>
            );
        } else {
            return null;
        }

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAlert: state.isAlert
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo);