import MainLayout from '../template/MainLayout'
import BackgroundImage from '../../assets/images/back.jpeg'
import { makeStyles } from '@mui/styles'
import { useTheme, useMediaQuery } from '@mui/material'


function Home() {
  const theme = useTheme()
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'))
  const classes = useStyles({ isMobileOrTablet })

  return (
    <MainLayout>
      <div className={classes.hero}>
        <img src={BackgroundImage} alt="Home Hero" />
      </div>
    </MainLayout>
  )
}

const useStyles = makeStyles({
  hero: {
    position: 'absolute',
    top: ({ isMobileOrTablet }) => isMobileOrTablet ? 0 : 80,
    left: 0,
    zIndex: -1,
    opacity: .8,
    width: '100vw',
    height: '100vh',
    '& > img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }
})

export default Home
