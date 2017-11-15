
import React from 'react'
import {connect} from 'react-redux'

class Loading extends React.Component {
    render() {
        let {msg} = this.props;

        return (
            <div>
                {msg}
            </div>
        )
    }
}

export default Loading
