import { useMediaQuery, useTheme } from '@mui/material';
import { Container } from '@mui/material'
import NavBar from '../molecules/NavBar'
import AppBar from '../molecules/AppBar'
import { CurrentProvider } from '../../contexts/Current'


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
      <CurrentProvider>
        <Container style={{ paddingTop: 30 }}>
          {children}
        </Container>
      </CurrentProvider>
      {
        isMobileOrTablet && (
          <AppBar type="dashboard" />
        )
      }
    </div>
  )
}

export default DashboardLayout
