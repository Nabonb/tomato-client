import { Outlet } from "react-router-dom"
import Navbar from "../Components/Shared/Navbar/Navbar"
import Footer from "../Home/Footer"

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-5 my-8"><Outlet></Outlet></div>
      <div >
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Main
