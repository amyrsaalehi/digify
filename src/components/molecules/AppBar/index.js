import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Paper } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import AnalyticsIcon from '@mui/icons-material/Analytics';
import BallotIcon from '@mui/icons-material/Ballot';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';

import { useGlobal } from '../../../core/contexts/Global'
import { useCurrent } from '../../../core/contexts/Current'
import { logout } from '../../../core/utils/storage'


function AppBar() {
  const [value, setValue] = useState('login');
  const { user, setUser } = useGlobal()
  const { setCurrent } = useCurrent()
  const history = useHistory()

  const links = [
    {
      path: '/',
      title: 'HOME',
      condition: true,
      icon: () => <HomeIcon />
    },
    {
      path: '/login',
      title: 'LOGIN',
      condition: !user?.id,
      icon: () => <LoginIcon />
    },
    {
      path: '/sign-up',
      title: 'SIGNUP',
      condition: !user?.id,
      icon: () => <ExitToAppIcon />
    },

    {
      path: '/dashboard',
      title: 'TASKS',
      condition: !!user?.id,
      icon: () => <BallotIcon />
    },
    {
      path: '/dashboard/report',
      title: 'REPORTS',
      condition: !!user?.id,
      icon: () => <AnalyticsIcon />
    },
  ]

  const handleLogout = () => {
    logout(window?.localStorage, user?.id)
    setUser({
      id: 0,
      name: '',
      phone: '',
      enterExits: []
    })
    setCurrent({
      id: 0,
      start: 0,
      end: 0,
      tasks: []
    })
    history.push('/')
  }

  const handleChange = (_, newValue) => {
    setValue(newValue);
    if (value !== 'LOGOUT') { // I know again that values should be ENUMMMM :]]]]]]
      history.push(links.find(link => link.title === newValue.toUpperCase())?.path)
    }
  };


  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center' }} elevation={3}>
      <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
        {
          links?.map(link => link.condition && (
            <BottomNavigationAction
              key={link.path}
              label={link.title}
              value={link.title}
              icon={link.icon()}
            />
          ))
        }
        {
          user?.id ? (
            <BottomNavigationAction onClick={handleLogout} label="LOGOUT" value="LOGOUT" icon={<LogoutIcon />} />
          ) : null
        }
      </BottomNavigation>
    </Paper>
  );
}

export default AppBar
