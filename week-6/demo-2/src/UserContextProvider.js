import React from 'react';
import user from './data/user';

export const UserContext = React.createContext(user);

function UserContextProvider({ children }) {
  return (
    <UserContext.Provider value={user}>
      { children }
    </UserContext.Provider>
  )
}

export default UserContextProvider;
