import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout.tsx";
import Home from "./components/Home/home.tsx";
import AddingData from "./components/Form/AddingData.tsx";
import DisplayData from "./components/DisplayData/DisplayData.tsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { ProfilesProvider } from "./context/ProfilesContext.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="form" element={<AddingData />} />
      <Route path="displaydata" element={<DisplayData />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProfilesProvider>
      <RouterProvider router={router} />
    </ProfilesProvider>
  </React.StrictMode>
);
