import { createContext, useState, useContext } from "react";
const Context = createContext();

export const Provider = ({ children }) => {
  const [user, setUser] = useState("");
  const data = { user, setUser };
  return <Context.Provider value={data}>{children}</Context.Provider>; //bu componentin aldındaki
  //tüm chilrenlarda data değeri kullanılabilir
};
export const useAuth = () => useContext(Context);
