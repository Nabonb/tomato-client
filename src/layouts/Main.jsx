import { Outlet } from "react-router-dom"
import Navbar from "../Components/Shared/Navbar/Navbar"

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-5 my-8"><Outlet></Outlet></div>
    </div>
  )
}

export default Main
