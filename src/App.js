import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";
import Footer from "./components/Footer";
import userContext from "./utils/userContext";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication logic can be added here

  useEffect(() => {
    const fetchUserData = async () => {
      const loginData = await fetch("https://api.github.com/users/beraanik201");
      const json = await loginData.json();
      setUserName(json.name);
    };
    fetchUserData();
  }, []);

  return (
    <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </userContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
