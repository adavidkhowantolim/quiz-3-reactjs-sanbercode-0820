import React, { useState, createContext, useEffect} from "react";

export const LoginContext = createContext();

export const LoginProvider = props => {
  const [tempUser, setTempUser] = useState({
    username: "",
    password: "",
    isLoggedIn: false
  })

  // useEffect(() => {
  //   if (dataBuah === null){
  //     axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
  //     .then(res => {
  //       setDataBuah(res.data);
  //     }) 
  //   }
  // }, [dataBuah]);

  return (
    <LoginContext.Provider value={[tempUser, setTempUser]}>
      {props.children}
    </LoginContext.Provider>
  );
};