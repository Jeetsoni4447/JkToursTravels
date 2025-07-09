import { createBrowserRouter } from "react-router";

import App from "./src/App";
import HomePage from "./src/views/HomePage/HomePage";
import Contact from "./src/views/Contact/Contact";
import Packages from "./src/views/Packages/Packages";
import Forbooking from "./src/views/Forbooking/Forbooking";
import Payonline from "./src/views/Payonline/Payonline";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      { path: "Contact", Component: Contact },
      { path: "packages", Component: Packages },
      { path: "forbooking", Component: Forbooking },
      { path: "payonline", Component: Payonline }
    ],
  },
]);

export default router;
