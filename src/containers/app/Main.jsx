
import React from 'react'
import {connect} from 'react-redux'

import {actions as ModalActions} from '../../actions/modal'

class Main extends React.Component {
    render() {
        return (
            <div>
                {'Main'}
                <br />
                <a
                    href="javascript:void(0)"
                    onClick={this.props.openModalAlert}
                >
                    {'ModalAlert'}
                </a>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        openModalAlert: () => {
            dispatch(ModalActions.showModal('alert'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
