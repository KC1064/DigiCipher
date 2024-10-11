import React, { useEffect, useState } from "react";
import Home from "./Components/Pages//Home";
import Rules from "./Components/Pages/Rules";
import Classic from "./Components/Pages/Classic";
import Challenger from "./Components/Pages/Challenger";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Leaderboard from "./Components/Pages/Leaderboard";
import Loader from "./Components/utils/Loader";
import { ChakraProvider } from "@chakra-ui/react";
import About from "./Components/Pages/About";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/rules",
    element: <Rules />,
  },
  {
    path: "/classic",
    element: <Classic />,
  },
  {
    path: "/challenger",
    element: <Challenger />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ChakraProvider>
      <RouterProvider router={appRouter} />{" "}
    </ChakraProvider>
  ); // Render RouterProvider after loading
};

export default App;
