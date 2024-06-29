// Add food item into the server
export const addFood =async foodData=>{
    console.log(foodData)
    const response = await fetch(`${import.meta.env.VITE_API_URL}/foods`,{
        method:"POST",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(foodData)
    })
    const data =await response.json()
    return data
}

//Get all the food from the server
export const getAllFood =async ()=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/foods`)
    const data = await response.json()
    return data
}

// Delete one food from the server
export const deleteFood = async id =>{
    const response= await fetch(`${import.meta.env.VITE_API_URL}/foods/${id}`,{
        method:"DELETE",
        headers:{
            'content-type':'application/json'
        }
    })
    const data = await response.json()
    console.log(data)
    return data
}

//Ordered food from the server
export const orderedFood =async (details)=>{
    const response= await fetch(`${import.meta.env.VITE_API_URL}/orders`,{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(details)
    })
    const data = await response.json()
    return data
}

// Get the ordered food from the server
export const getOrderedFood = async(email)=>{
    console.log(email)
    const response = await fetch(`${import.meta.env.VITE_API_URL}/orders/${email}`)
    const data = await response.json()
    console.log(data)
    return data
}

//Get the order for the admin
export const getAdminFood = async()=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/orders`) 
    const data = await response.json()
    return data
}

//Update the food Status
export const foodStatus = async (id,status) =>{
    const currentStatus = {
       status:status
    }
   return await fetch(`${import.meta.env.VITE_API_URL}/orders/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(currentStatus)
    }).then(res=>res.json())
}
