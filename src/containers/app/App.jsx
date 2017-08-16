
import React from 'react'
import {connect} from 'react-redux'

import Modal from '../modal'
import Navigation from '../../components/Navigation'

class App extends React.Component {
    render() {
        const {isOpen} = this.props.modal

        console.log(isOpen)
        
        return (
            <div>
                {isOpen &&
                    <Modal />
                }
                <Navigation />
                {this.props.children}
            </div>
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)