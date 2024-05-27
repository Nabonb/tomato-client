import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../Home/Home'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/Signup/Signup'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children:[{
      path:'/',
      element:<Home></Home>,
    }]
  },
  {
    path:'/login',
    element: <Login></Login>
  },
  {
    path:'/signup',
    element: <SignUp></SignUp>
  },
])
