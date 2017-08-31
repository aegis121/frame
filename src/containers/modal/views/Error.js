import React from 'react'

export default class Alert extends React.Component {
    render() {
        let {data} = this.props;

        return (
            <div style={{backgroundColor: 'FF3333'}}>
                <h2>
                    {'Error'}
                </h2>
                <div>
                    {data}
                </div>
            </div>
        )
    }
}
