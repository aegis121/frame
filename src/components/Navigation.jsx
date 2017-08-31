import React from 'react'
import { IndexLink, Link } from 'react-router'

const Navigation = () => (
    <ul>
        <li>
            <IndexLink to="/" activeClassName="active">
                Index
            </IndexLink>
        </li>
        <li>
            <Link to="/exchange" activeClassName="active">
                Exchange
            </Link>
        </li>
        <li>
            <Link to="/eth" activeClassName="active">
                Eth
            </Link>
        </li>
    </ul>
)

export default Navigation