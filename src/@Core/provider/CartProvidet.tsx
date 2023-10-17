'use client'
import React, { ReactNode, createContext } from 'react'

export const CartContext = createContext<any>(null)

export const CartProvider: React.FC<any> = ({ children, ...restProps }) => {
	return <CartContext.Provider value={{...restProps}}>{children}</CartContext.Provider>
}