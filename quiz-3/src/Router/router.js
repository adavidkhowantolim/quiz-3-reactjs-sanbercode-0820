import React from "react";
import {RouterProvider} from "./router_context"
import RouterApp from "./router_app"

import './router.css';

// ubah navbar jadi context kaya tugas 14 dan ubah stylenya
export default function Tugas15 () {
  return(
    <RouterProvider>
      <RouterApp/>
    </RouterProvider>
  );
};