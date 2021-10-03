import { Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { useGlobal } from '../../contexts/Global'
import { logout } from '../../utils/storage'
import BtnLink from '../atoms/BtnLink';


function NavBar({ type }) {
  const classes = useStyles()
  const { user, setUser } = useGlobal()
  const history = useHistory()

  const links = [
    {
      path: '/',
      title: 'Home',
      condition: true
    },
    {
      path: '/login',
      title: 'Login',
      condition: !user?.id
    },
    {
      path: '/sign-up',
      title: 'Signup',
      condition: !user?.id
    },

    {
      path: '/dashboard',
      title: 'Enter/Exit',
      condition: !!user?.id
    },
    {
      path: '/dashboard/report',
      title: 'Reports',
      condition: !!user?.id
    },
  ]
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
            links?.map(link => link.condition && (
              <BtnLink key={link.title} link={link} />
            ))
          }

          {
            user?.id ? (
              <li>
                <Button variant="outlined" color="error" onClick={handleLogout} >
                  Logout
                </Button>
              </li>
            ) : null
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
