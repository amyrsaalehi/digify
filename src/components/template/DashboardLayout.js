import { useMediaQuery, useTheme } from '@mui/material';
import { Container } from '@mui/material'
import NavBar from '../molecules/NavBar'
import AppBar from '../molecules/AppBar'

// DashboardLayout is just like MainLayout DashboardLayout, But we separate them cuz to be easy to modify later :]
function DashboardLayout({ children }) {
  const theme = useTheme()
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'))


  return (
    <div>
      {
        !isMobileOrTablet && (
          <NavBar />
        )
      }
      <Container style={{ paddingTop: 30 }}>
        {children}
      </Container>
      {
        isMobileOrTablet && (
          <AppBar type="dashboard" />
        )
      }
    </div>
  )
}

export default DashboardLayout
