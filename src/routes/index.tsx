import { createBrowserRouter } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import ForgotPassword from "./forgotpassword";
import ResetPassword from "./resetpassword";
import Dashboard from "./dashboard"

const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/forgotpassword",
    Component: ForgotPassword,
  },
  {
    path: "/resetpassword",
    Component: ResetPassword,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
]);

export default router;