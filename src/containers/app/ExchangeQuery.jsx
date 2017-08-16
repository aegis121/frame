
import React from 'react'
import {connect} from 'react-redux'

import {actions as ExchangeActions} from '../../actions/exchange'

const Rate = ({name, price}) => (
    <tr>
        <td>
            {name}
        </td>
        <td>
            {price}
        </td>
    </tr>
)

const RatesList = ({rates}) => (
    <table>
        <tbody>
            {Object.keys(rates).map((name, index) => (
                <Rate
                    key={index}
                    name={name}
                    price={rates[name]}
                />
            ))}
        </tbody>
    </table>
)

class ExchangeQuery extends React.Component {
    constructor(props) {
        super(props)

        this.checkExchange = this.checkExchange.bind(this)
    }
    
    checkExchange(props) {
        let {currency} = props;
        let {loading, rates} = props.exchange;

        if (loading && rates === undefined) {
            this.props.loadCurrency(currency)
        }
    }

    componentWillReceiveProps(nextprops) {
        if (nextprops.currency != this.props.currency) {
            this.checkExchange(nextprops)
        }
    }

    componentDidMount() {
        this.checkExchange(this.props)
    }
    
    render() {
        let {currency} = this.props;
        let {loading, rates} = this.props.exchange

        return (
            <div>
                <h3>{currency}</h3>
                {loading &&
                    <div>
                        {'Loading'}
                    </div>
                }
                {!loading &&
                    <div>
                        <RatesList
                            rates={rates}
                        />
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let {currency} = ownProps;
    let exchange = state.exchange[currency] || {loading: true}

    return {
        exchange
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        loadCurrency: (currency) => {
            dispatch(ExchangeActions.getExchange(currency))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeQuery)