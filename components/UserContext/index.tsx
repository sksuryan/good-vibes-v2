import React, { useContext, useState } from "react";

const UserDetails = React.createContext(null);
const UpdateUserDetails = React.createContext(null);

export const useUserDetails = () => useContext(UserDetails);
export const useSetUserDetails = () => useContext(UserDetails);

export const UserProvider = ({ children }) => {
  const [user, setUserValue] = useState(null);
  return (
    <UserDetails.Provider value={user}>
      <UpdateUserDetails.Provider value={setUserValue}>
        {children}
      </UpdateUserDetails.Provider>
    </UserDetails.Provider>
  );
};
