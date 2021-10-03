import { useMediaQuery, useTheme } from '@mui/material';
import { Container } from '@mui/material'
import NavBar from '../molecules/NavBar'
import AppBar from '../molecules/AppBar'


function DashboardLayout({ children }) {
  const theme = useTheme()
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'))


  return (
    <div>
      {
        !isMobileOrTablet && (
          <NavBar type="dashboard" />
        )
      }
      <Container>
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
