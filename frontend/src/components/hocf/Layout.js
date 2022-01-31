import React from 'react'
import NavBar from '../NavBar'
import { connect } from 'react-redux'

const Layout = (props) => {

    return (
        <div>
            <NavBar />
            {props.children}
        </div>
    )
}

export default connect(null)(Layout)
