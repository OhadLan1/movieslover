/* import { useContext } from "react";
 */import { createContext, useState } from "react";

 const authContext = createContext(null);
 authContext.displayName = "Search-context";
 export const AuthProvider = ({ children }) => {
     const [Search,setSearch]=useState("");
     
     return (
       <authContext.Provider value={{ Search ,setSearch}}>
         {children}
       </authContext.Provider>
     );
   };