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

export const mainLinks = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/login',
    title: 'Login'
  },
  {
    path: '/sign-up',
    title: 'Signup'
  },
]

export const dashboardLinks = [
  {
    path: '/dashboard/enter-exit',
    title: 'Enter/Exit'
  },
  {
    path: '/dashboard/report',
    title: 'Reports'
  },

]
export default Routes
