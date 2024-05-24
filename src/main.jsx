import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error } from "./components";
import { Home, About, Contact, Work } from "./pages/index.js";
import { Provider } from "react-redux";
import store from "./app/store.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "work",
        element: <Work />,
        errorElement: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);