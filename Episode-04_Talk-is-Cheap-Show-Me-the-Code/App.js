import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import reactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About.js";
import Error from "./src/components/Error.js";
import Contact from "./src/components/Contact.js";
import RestaurantMenu from "./src/components/RestaurantMenu.js";
import Test from "./src/components/chirag-03-10-2024.js";
import useOnlineStatus from "./src/utils/useOnlineStatus.js";
import OfflinePage from "./src/components/OfflinePage.js";
import UserContext from "./src/utils/UserContext.js";
import TestCreateContextPolyfill from "./src/components/testCreateContextPolyfill.js";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore.js";
import Cart from "./src/components/Cart.js";
const GroceryHome = lazy(() =>
  import("./src/components/Grocery/GroceryHome.js")
);

export const AppLayout = () => {
  const onlineStatus = useOnlineStatus();
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const data = {
      name: "Nidhi Kumari",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          {onlineStatus ? <Outlet /> : <OfflinePage />}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <GroceryHome />
          </Suspense>
        ),
      },
      {
        path: "/test2",
        element: <TestCreateContextPolyfill />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
