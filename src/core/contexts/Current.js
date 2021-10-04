import * as React from 'react';
import { useGlobal } from './Global'

const CurrentContext = React.createContext(null);

export const CurrentProvider = ({ children }) => {
  const { setUser } = useGlobal()
  const [current, setCurrent] = React.useState({
    id: 0,
    start: 0,
    end: 0,
    tasks: []
  });

  /*
    enterExits: [
      {
        id;
        start;
        end;
        tasks;
      }
    ]
  
    tasks: [
      {
        id;
        title;
      }
    ]
  */

  React.useEffect(() => {
    console.log('current', current)
    if (!!current.id && !!current.start && !!current.end && current.tasks.length > 0) {
      setUser(prev => ({
        ...prev,
        enterExits: [
          ...prev.enterExits,
          current
        ]
      }))

      setCurrent({
        id: 0,
        start: 0,
        end: 0,
        tasks: []
      })
    }
  }, [current])

  return (
    <CurrentContext.Provider value={{ current, setCurrent }}>
      {children}
    </CurrentContext.Provider>
  )
}


export const useCurrent = () => {
  const current = React.useContext(CurrentContext);

  if (!current) {
    console.log('You cannot use useCurrent outside of CurrentProvider!')
    return null;
  }

  return current
}