import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from './components/pages/Home';
import About from './components/pages/about';
import Services from "./components/pages/Services";
// import LoginForm from "./components/SignUp";
import SiteDescription from "./components/pages/SiteDescription";
import Cabo from "./components/pages/cabo";
import Atlantis from "./components/pages/atlantis";
import Dubai from "./components/pages/dubai";
import Tulum from "./components/pages/tulum";
import Monaco from "./components/pages/monaco";
import MapPage from "./components/pages/mapPage";
import { Auth0Provider } from "@auth0/auth0-react";
import  ReactDOM  from "react-dom";
import SigninPage from './components/SigninPage';


// ReactDOM.render(
//       <Auth0Provider
      
//       domain="dev-ewh2qu1y5gvvgfin.us.auth0.com"
//       clientId="nGznF33Ot7JhjLa2S8DPOao7PwVtsllC"
//       redirectUri={window.location.origin}
//    >
//      <SigninPage/>
//       </Auth0Provider>,
      
//     document.getElementById('root')
//   );

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "Services",
        element: <Services/>,
      },
      // {
      //   path: "loginform",
      //   element: <LoginForm/>,
      // },
      {
        path: "sitedescription",
        element: <SiteDescription/>,
      },
      {
        path: "cabo",
        element: <Cabo/>,
      },
      {
        path: "atlantis",
        element: <Atlantis/>,
      },
      {
        path: "dubai",
        element: <Dubai/>,
      },
      {
        path: "tulum",
        element: <Tulum/>,
      },
      {
        path: "monaco",
        element: <Monaco/>,
      },
      {
        path: "mapPage",
        element: <MapPage/>,
      },
      {
        path: "SigninPage",
        element: <SigninPage/>,
      },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


