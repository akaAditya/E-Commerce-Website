import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/aboutUs/About";
import Home from "./components/homePage/Home";
import NavBar from "./components/navbar/Navbar";

const AboutPageRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
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
