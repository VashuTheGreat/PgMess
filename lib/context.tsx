// OrderContext.js
import React, { createContext, useContext, useState } from "react";

// 1. Create context
const OrderContext = createContext<{ orderData: any; setOrderData: React.Dispatch<React.SetStateAction<any>> } | undefined>(undefined);

// 2. Create provider component
export const OrderProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [orderData, setOrderData] = useState("hello ");

  return (
    <OrderContext.Provider value={{ orderData, setOrderData }}>
      {children}
    </OrderContext.Provider>
  );
};

// 3. Custom hook (optional, for cleaner code)
export const useOrder = () => useContext(OrderContext);
