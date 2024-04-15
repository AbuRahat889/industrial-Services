import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/Home page/HomePage";
// import Bookdetail from "./Components/Home page/Bookdetail";
import BookDetails from "./Components/Home page/BookDetails";
import ErrorPage from "./Components/Utillity/ErrorPage";
import { HelmetProvider } from "react-helmet-async";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import ContactUs from "./Components/ContactUs/ContactUs";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch("/BooksData.json"),
        element: <HomePage></HomePage>,
      },
      {
        path: "/bookes/:id",
        loader: () => fetch("/BooksData.json"),
        element: <BookDetails></BookDetails>,
      },
      {
        path:"/signin",
        element:<SignIn></SignIn>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/contactus',
        element:<ContactUs></ContactUs>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
 
    
  </React.StrictMode>
);
