import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import { useState } from 'react';
import { Paper } from '@mui/material';
import { mainLinks, dashboardLinks } from '../../Routes'

function AppBar({ type }) {
  const [value, setValue] = useState('recents');
  const links = type === 'main' ? mainLinks : type === 'dashboard' ? dashboardLinks : []

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center' }} elevation={3}>
      <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
        <BottomNavigationAction label="Enter Exit" value="EnterExit" icon={<FolderIcon />} />
        <BottomNavigationAction
          label="Reports"
          value="reports"
          icon={<RestoreIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default AppBar
