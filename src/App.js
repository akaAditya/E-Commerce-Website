import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/aboutUs/About";
import NavBar from "./components/navbar/Navbar";
import Store from "./components/store/Store";
import Home from "./components/homePage/Home";

const AboutPageRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/store", element: <Store /> },
  { path: "/about", element: <About /> },
]);

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={AboutPageRouter}>
        <NavBar/>
      </RouterProvider>
    </React.Fragment>
  );
}

export default App;
