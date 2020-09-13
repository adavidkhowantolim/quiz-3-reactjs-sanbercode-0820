import React from 'react';

function Logout() {
  window.sessionStorage.setItem("isUserLogged", false);
  window.open("http://localhost:3000/home");
}

export default Logout;

    