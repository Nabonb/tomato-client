import { Outlet } from 'react-router-dom'
import Sidebar from '../Pages/Admin/Dashboard/Sidebar'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import NotFound from '../Components/Shared/NotFound/NotFound'



const DashboardLayout = () => {
  const {role}= useContext(AuthContext)
  return (
    <div className='relative min-h-screen md:flex'>
      {role ? <><Sidebar />
      <div className='flex-1  md:ml-64'>
        <div className='p-5'>
          <Outlet />
        </div>
      </div></>:<NotFound></NotFound>}
    </div>
  )
}

export default DashboardLayout