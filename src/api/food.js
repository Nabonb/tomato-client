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
    console.log(data)
    return data
}