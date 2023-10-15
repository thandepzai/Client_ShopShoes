'use client'
import React, { ReactNode, createContext } from 'react'

export const CoreContext = createContext<any>(null)

export const CoreProvider: React.FC<any> = ({ children, ...restProps }) => {
	return <CoreContext.Provider {...restProps}>{children}</CoreContext.Provider>
}
