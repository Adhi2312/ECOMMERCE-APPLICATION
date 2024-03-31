import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{createContext, useEffect} from "react";
import { useState } from "react";
import {ip1} from "../App";
// import {AuthContext} from "./AuthContext";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);
    const [userId, setUserId] = useState(null);

    const login = async(username, password) =>{
        console.log(username, password, {ip1});
        console.log(`http:/${ip1}api/token/`);
        setIsLoading(true);
            try{
                const response = await fetch(`http:/${ip1}api/token/`,
            {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({"username":username, "password":password}),
            }
            );
            const data = await response.json();
            console.log(data);
            setUserToken(data.access);
            AsyncStorage.setItem('userToken',data.access);
            setIsLoading(false);
            loginBackend(username);
        }
            catch(err){console.log("saavu daa...");}
        // fetch();
    }

    const logout = () =>{
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        setIsLoading(true);
    }
   const loginBackend =async(username)=>{
            try{const response=await fetch(`http:/${ip1}loginBack`,
            {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({'username':username}),
        })
        const d=await response.json();
        setUserId(d.userId);
        alert(d.userId);}
        catch{console.log("error")}


    }

    const isLoggedin = async() =>{
        try{
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            setUserToken(userToken);
            setIsLoading(false);
        }
        catch(e){
            console.log(`logged in error...   ${e}`)
        }
        
    }

    useEffect(()=>{isLoggedin()} , [])
    console.log(isLoading)
    return (
        <AuthContext.Provider value ={{login, logout, isLoading, userToken,userId}}>
            {children}
        </AuthContext.Provider>
    )
}