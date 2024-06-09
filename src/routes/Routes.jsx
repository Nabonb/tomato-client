import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import Order from "../Pages/Order/Order";
import PlaceOrder from "../Pages/PlaceOrder/PlaceOrder";
import DashboardLayout from "../layouts/DashboardLayout";
import AddFood from "../Pages/Admin/Dashboard/AddFood";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/place-order",
        element: <PlaceOrder></PlaceOrder>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/add-food",
        element: <AddFood></AddFood>,
      },
    ],
  },
]);
