
import React from 'react'
import {connect} from 'react-redux'

import Modal from '../modal'
import Navigation from '../../components/Navigation'

import Loading from '../../components/Loading'
import Simple from './Simple'

class App extends React.Component {
    render() {
        let {active, msg, mode} = this.props.loading;
        if (active) {
            if (mode == "fund") {
                return <Simple />
            }

            return <Loading msg={msg} />
        }

        return (
            <div>
                {'Done'}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.app.loading
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
