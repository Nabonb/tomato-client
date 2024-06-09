import { Outlet } from "react-router-dom"
import Navbar from "../Components/Shared/Navbar/Navbar"
import Footer from "../Home/Footer"

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="sm:px-8 px-6 my-8 max-w-screen-xl mx-auto"><Outlet></Outlet></div>
      <div >
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Main
