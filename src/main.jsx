import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AboutMe from "./pages/AboutMe.jsx";
import ContactMe from "./pages/ContactMe.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Skills from "./pages/Skills.jsx";

const router = createBrowserRouter([
  {
    parth: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Portfolio />,
      },
      {
        path: "about-me",
        element: <AboutMe />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "contact",
        element: <ContactMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
