import { useMediaQuery, useTheme } from '@mui/material';
import { Container } from '@mui/material'
import NavBar from '../molecules/NavBar'
import AppBar from '../molecules/AppBar'


function MainLayout({ children }) {
  const theme = useTheme()
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <div>
      {
        !isMobileOrTablet && (
          <NavBar type="main" />
        )
      }
      <Container style={{ paddingTop: 30 }}>
        {children}
      </Container>

      {
        isMobileOrTablet && (
          <AppBar type="main" />
        )
      }
    </div>
  )
}

export default MainLayout
