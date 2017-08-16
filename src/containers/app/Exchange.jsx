
import React from 'react'
import {connect} from 'react-redux'

import { browserHistory } from 'react-router'
import ExchangeQuery from './ExchangeQuery'

class Exchange extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            val: props.queryCurrency
        }

        this.onValChange = this.onValChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    onValChange(e) {
        this.setState({
            val: e.target.value
        })
    }

    onClick() {
        let {val} = this.state
        this.props.search(val)
    }

    render() {
        let {val} = this.state
        let {queryCurrency} = this.props
        
        return (
            <div>
                <div>
                    <input
                        type="text"
                        value={val}
                        placeholder={'i.e. eth'}
                        onChange={this.onValChange}
                    />
                    <input
                        type="button"
                        value={'Search'}
                        onClick={this.onClick}
                    />
                </div>
                {queryCurrency != '' &&
                    <ExchangeQuery
                        currency={queryCurrency}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let queryCurrency = ownProps.location.query.currency || ''

    return {
        queryCurrency
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        search: function(val) {
            browserHistory.push('/exchange?currency=' + val)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exchange)