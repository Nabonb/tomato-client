import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";
import { food_list } from "../assets/images/assets";
import { getRole } from "../api/auth";
import { getAllFood } from "../api/food";



export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role,setRole] = useState(null)
  const [foodReady, setFoodReady] = useState('Food Processing')


  useEffect(() => {
    if (user) {
      getRole(user.email).then((data) => setRole(data));
    }
  }, [user]);
 

  //this is for the user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //This is for food
  const [cartItems, setCartItems] = useState([]);
  const [foodItem,setFoodItem] = useState([])

  const addToCart = (food) => {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex(item => item._id === food._id);

      if (existingItemIndex === -1) {
        // Item does not exist in the cart, add it with quantity 1
        return [...prev, { ...food, quantity: 1 }];
      } else {
        // Item exists, update its quantity
        const updatedCart = [...prev];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };
        return updatedCart;
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex(item => item._id === itemId);

      if (existingItemIndex === -1) {
        // Item does not exist in the cart, do nothing
        return prev;
      } else {
        // Item exists, update its quantity or remove it
        const updatedCart = [...prev];
        if (updatedCart[existingItemIndex].quantity > 1) {
          updatedCart[existingItemIndex].quantity -= 1;
        } else {
          updatedCart.splice(existingItemIndex, 1);
        }
        return updatedCart;
      }
    });
  };
  

  const [foods, setFoods] = useState([]);
  useEffect(() => {
    getAllFood().then(foodList=>{
    setFoods(foodList)
  }).catch(err=>console.log(err.message))
  }, []);

  const getSubTotalCartAmount = () => {
    let totalAmount = 0;
  
    cartItems.forEach(cartItem => {
      const itemInfo = foods.find(product => product._id === cartItem._id);
      if (itemInfo) {
        totalAmount += itemInfo.price * cartItem.quantity;
      }
    });
  
    return totalAmount;
  };
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) {
        axios
          .post(`${import.meta.env.VITE_API_URL}/jwt`, {
            email: currentUser?.email,
          })
          .then((data) => {
            console.log(data.data.token);
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    resetPassword,
    logOut,
    updateUserProfile,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getSubTotalCartAmount,
    role,
    foodReady,
    setFoodReady

  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
