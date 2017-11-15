
import React from 'react'
import {connect} from 'react-redux'

import {actions as LoadingActions} from '../../actions/loading'
import html2canvas from '../../lib/html2canvas.min.js'

const Link = ({value, onClick}) => (
    <a
        href="javascript:void(0)"
        onClick={onClick}
    >
        {value}
    </a>
)

class Simple extends React.Component {
    render() {
        return (
            <div>
                {'Simple'}
                <div>
                    <Link 
                        value={'Uno'}
                        onClick={this.props.good}
                    />
                    <br />
                    <Link 
                        value={'Dos'}
                        onClick={this.props.bad}
                    />
                    <br />
                    <Link 
                        value={'Tres'}
                        onClick={this.props.screenshot}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        good: () => {
            dispatch(LoadingActions.checkFundSuccess())
        },
        bad: () => {
            dispatch(LoadingActions.checkFundFailure())
        },
        screenshot: () => {
            console.log(document.body)
            
            html2canvas(document.body).then(function(canvas) {
                let screenshot = canvas.toDataURL("image/png"); // base64
            });

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Simple)
