import React from 'react'
import ReactDOM from 'react-dom'
import { checkPropTypes } from 'prop-types';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} />:<p>Please Sign In</p>}
        </div>
    )
}


const AdminInfo = withAdminWarning(Info)

const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'))