
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {actions as ModalActions} from '../../actions/modal'

class Background extends Component {
    render() {
        return (
            <div 
                className="modal-background"
                onClick={() => {
                    console.log("- background -")
                }}
            >
                {this.props.children}
            </div>
        )
    }
}

import Alert from './views/Alert'
import Error from './views/Error'

const Views = {
    'alert': Alert,
    'error': Error
}

class Modal extends Component {
    render() {
        let {name, data} = this.props.modal;
        let View = Views[name];

        return (
            <Background>
                <div className="dialog">
                    <a href="javascript:void(0)" onClick={this.props.close}>Close</a>
                    <View 
                        data={data}
                    />
                </div>
            </Background>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        modal: state.modal
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        close: () => {
            dispatch(ModalActions.closeModal())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)