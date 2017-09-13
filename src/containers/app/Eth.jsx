
import React from 'react'
import {connect} from 'react-redux'

import {actions as EthActions} from '../../actions/eth'

class Eth extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            address: ''
        }

        this.onChange = this.onChange.bind(this)
        this.send = this.send.bind(this)
    }

    send() {
        let {address} = this.state;
        this.props.send(address)
    }

    onChange(e) {
        this.setState({address: e.target.value})
    }

    render() {
        let {balance} = this.props.eth
        let {address} = this.state

        return (
            <div>
                <div>
                    {'Balance'}
                </div>
                <a
                    href="javascript:void(0)"
                    onClick={() => {this.props.sendOther()}}
                >
                    {'Other'}
                </a>
                <div>
                    <input
                        type="text"
                        onChange={this.onChange}
                        value={address}
                    />
                    <a
                        href="javascript:void(0)"
                        onClick={this.send}
                    >
                        {'Search'}
                    </a>
                </div>
                {balance != 0 &&
                    <div>
                        {balance}
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        eth: state.eth
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        send: function(address) {
            dispatch(EthActions.getBalance(address))
        },
        sendOther: function() {

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Eth)
