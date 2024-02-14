import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GenerateUrl from "./components/GenerateUrl";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/generate",
    element: <GenerateUrl />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
