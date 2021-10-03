import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from './MainRoutes'
import DashboardRoutes from './DashboardRoutes'
import NotFound from '../components/pages/404'

function Routes() {

  return (
    <>
      <Router>
        <MainRoutes />
        <DashboardRoutes />
      </Router>
    </>
  )
}

export default Routes
