import { Route, Switch, useHistory } from "react-router-dom";
import EnterExit from '../components/pages/Enter-Exit'
import Report from '../components/pages/Report'
import { getUser } from "../utils/storage";

function DashboardRoutes() {
  const user = getUser()
  const history = useHistory()

  if (!user?.user) {
    history.push('/login')
  }

  return (
    <Switch>
      <Route exact path="/dashboard/enter-exit" component={EnterExit} />
      <Route exact path="/dashboard/report" component={Report} />
    </Switch>
  )
}

export default DashboardRoutes