import React, {createContext} from "react";

export const RouterContext = createContext();

export const RouterProvider = props => {

  return (
    <RouterContext.Provider>
      {props.children}
    </RouterContext.Provider>
  );
};