import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleGroup({ isRemote, setIsRemote, options = ['remote', 'in-person'] }) {

  const handleToggled = (event, newValue) => {
    switch (newValue) {
      case options[0]:
        setIsRemote(true)
        break;
      case options[1]:
        setIsRemote(false)
        break;
      default:
        setIsRemote(false)
    }
  };

  return (
    <ToggleButtonGroup
      value={isRemote ? options[0] : options[1]}
      exclusive
      onChange={handleToggled}
      sx={{ height: '100%', maxHeight: 56 }}
    >
      {
        options.map(option => (
          <ToggleButton key={option} value={option}>
            {option.toUpperCase()}
          </ToggleButton>
        ))
      }
    </ToggleButtonGroup>
  );
}