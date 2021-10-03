import { Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { mainLinks, dashboardLinks } from '../../Routes'
import { useGlobal } from '../../contexts/Global'
import { logout } from '../../utils/storage'


function NavBar({ type }) {
  const classes = useStyles()
  const { user, setUser } = useGlobal()
  const links = type === 'main' ? mainLinks : type === 'dashboard' ? dashboardLinks : []
  const history = useHistory()

  const handleLogout = () => {
    logout(window?.localStorage, user?.id)
    setUser({ id: 0, name: '', phone: '', enterExits: [] })
    history.push('/')
  }


  return (
    <nav className={classes.nav}>
      <Container>
        <ul className={classes.navList}>

          {
            links?.map(link => (
              <Button variant="outlined" key={link.title}>
                <NavLink exact to={link.path}>
                  {link.title}
                </NavLink>
              </Button>
            ))
          }


          {
            (type === "dashboard" && user?.id) && (
              <li>
                <Button variant="outlined" color="error" onClick={handleLogout} >
                  Logout
                </Button>
              </li>
            )
          }
        </ul>
      </Container>
      <hr />
    </nav>
  )
}

const useStyles = makeStyles(theme => ({
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ccc',
    boxShadow: '1px 1px 5px 1px #ccc',
    marginBottom: 10,


    '&  button': {
      padding: '10px 15px',
    },
    '& li:first-child': {
      paddingLeft: 0
    },
    '& a': {
      color: '#008dff'
    },
    '& .active': {
      color: '#0dd1ff',
    }
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
    alignItems: 'center',
  }
}))

export default NavBar
