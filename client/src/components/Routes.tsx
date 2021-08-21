import { Route, Switch } from 'react-router-dom'
import routes from '../pages'

import { omit } from 'lodash'

const Routes = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          exact={true}
          {...omit(route, 'component')}
          path={route.path}
          key={route.name}
        >
          <route.component />
        </Route>
      ))}
    </Switch>
  )
}

export default Routes
