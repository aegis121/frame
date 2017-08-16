
import React from 'react'
import {Route} from 'react-router'

import App from './containers/app/App'
import Main from './containers/app/Main'
import Exchange from './containers/app/Exchange'
import ExchangeQuery from './containers/app/ExchangeQuery'

export default (
    <Route component={App}>
        <Route path="/" component={Main} />
        <Route path="/exchange" component={Exchange} >
            <Route path=":id" component={ExchangeQuery} />
        </Route>
    </Route>
)
