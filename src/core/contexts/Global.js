import * as React from 'react';
import { changeUser } from '../utils/storage'

const GlobalContext = React.createContext(null);

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = React.useState({ id: 0, name: '', phone: '', enterExits: [] });

  /*
    Users = {
      id;
      name;
      phone;
      enterExits;
    }

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
    console.log(user)
    changeUser(window?.localStorage, user)
  }, [user])


  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  )
}


export const useGlobal = () => {
  const global = React.useContext(GlobalContext);

  if (!global) {
    console.log('You cannot use useGlobal outside of GlobalProvider!')
    return null;
  }

  return global
}