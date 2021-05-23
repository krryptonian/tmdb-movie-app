import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path='/' component={Home} />
      </Switch>
    </Router>
  )
}

export default Routes
