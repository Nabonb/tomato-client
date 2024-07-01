import axios from "axios"
import { useContext, useEffect } from "react"
import { useNavigate} from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const axiosSecure = axios.create({
    baseURL:`${import.meta.env.VITE_API_URL}`
})

const useAxiosSecure = ()=>{
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(()=>{
        //Intercept request from client to  server
        axiosSecure.interceptors.request.use(config=>{
            const token = `Bearer ${localStorage.getItem('access-token')}`
            if(token){
                config.headers.Authorization = token
            }
            return config
        })


        //Intercept response from server to client
        axios.interceptors.response.use(
            response=>response,
            async error=>{
              if((error.response && error.response.status === 401) || error.response.status === 403 )  {
                await logOut()
                navigate('/logout')
              }
              return Promise.reject(error);
        })
    },[logOut,navigate,axiosSecure])
    return [axiosSecure]
}

export default useAxiosSecure