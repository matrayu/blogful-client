import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../../services/token-service'

// export default function PrivateRoute(props) {}
export default function PrivateRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={rProps => (
        TokenService.hasAuthToken()
          ? <Component {...rProps} />
          : <Redirect
              to={{
                pathname: '/login',
                state: { from: rProps.location }
              }}
            />
      )}
    />
  )
}
