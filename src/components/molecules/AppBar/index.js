import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import AnalyticsIcon from '@mui/icons-material/Analytics';
import BallotIcon from '@mui/icons-material/Ballot';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';

import { useState } from 'react';
import { Paper } from '@mui/material';
import { useHistory } from 'react-router-dom';



import { useGlobal } from '../../../core/contexts/Global'
import { useCurrent } from '../../../core/contexts/Current'
import { logout } from '../../../core/utils/storage'

function AppBar() {
  const [value, setValue] = useState('recents');
  const { user, setUser } = useGlobal()
  const { setCurrent } = useCurrent()
  const history = useHistory()

  const links = [
    {
      path: '/',
      title: 'Home',
      condition: true,
      icon: () => <HomeIcon />
    },
    {
      path: '/login',
      title: 'Login',
      condition: !user?.id,
      icon: () => <LoginIcon />
    },
    {
      path: '/sign-up',
      title: 'Signup',
      condition: !user?.id,
      icon: () => <ExitToAppIcon />
    },

    {
      path: '/dashboard',
      title: 'Enter/Exit',
      condition: !!user?.id,
      icon: () => <BallotIcon />
    },
    {
      path: '/dashboard/report',
      title: 'Reports',
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue !== 'Logout') { // I know again that values should be ENUMMMM :]]]]]]
      history.push(links.find(link => link.title === newValue).path)
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
            <BottomNavigationAction onClick={handleLogout} label="Logout" value="Logout" icon={<LogoutIcon />} />
          ) : null
        }
      </BottomNavigation>
    </Paper>
  );
}

export default AppBar
