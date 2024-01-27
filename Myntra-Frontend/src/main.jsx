import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeItems from "./Components/HomeItems.jsx";
import Bag from "./Components/Bag.jsx";
import { Provider } from "react-redux";
import myntraStore from "./Store/index.js";
import WishList from "./Components/WishList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomeItems /> },
      { path: "/bag", element: <Bag /> },
      { path: "/wishlist", element: <WishList /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
