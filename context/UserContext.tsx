"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

interface UserContextType {
  user_student: any;
  setUser_student: (user: any) => void;
  maincon: any;
  handleSetcon: (key: any) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user_student, setUser_student] = useState<any>(null);
  const [maincon,setMaincon]=useState<any>({});
  


  const handleSetcon=(key: any)=>{
    console.log(key);
    setMaincon(key);


  }
  useEffect(() => {
    const user = localStorage.getItem("user_student");
    if (user) {
      setUser_student(JSON.parse(user));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user_student, setUser_student,maincon,handleSetcon }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
