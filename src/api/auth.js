// Save user email into the database
export const saveUser = (user) =>{
    const currentUser = {
        email: user.email
    } 
    fetch(`${import.meta.env.VITE_API_URL}/users/${user.email}`,{
        method:"PUT",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    }).then(res=>res.json()).then(data=>console.log(data))
}

// Get user role
export const getRole =async email=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`)
    const user = await response.json()
    return user?.role
}