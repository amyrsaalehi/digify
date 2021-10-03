import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { mainLinks, dashboardLinks } from '../../Routes'


function NavBar({ type }) {
  const classes = useStyles()
  const links = type === 'main' ? mainLinks : type === 'dashboard' ? dashboardLinks : []


  return (
    <nav className={classes.nav}>
      <Container>
        <ul className={classes.navList}>

          {
            links?.map(link => (
              <li key={link.title}>
                <NavLink exact to={link.path}>
                  {link.title}
                </NavLink>
              </li>
            ))
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
    marginBottom: 10
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
    alignItems: 'center',

    '& > li': {
      padding: '15px 10px',
    },
    '& > li:first-child': {
      paddingLeft: 0
    },
    '& a': {
      color: '#0dd1ff'
    },
    '& .active': {
      color: '#008dff',
      textDecoration: '1px underline #008dff',
      fontWeight: 'bold'
    }
  }
}))

export default NavBar
