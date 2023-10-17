import React, { ReactNode } from 'react'
import Header from './Header'
import AppFooter from './AppFooter'
import { useYupDefaultMessage } from '../helper/Yup'
import CardContextProvider from '../contexts/CartContext'
import { ToastContainer } from 'react-toastify'
type Props = {
	children: ReactNode
}
export const AppLayout: React.FC<Props> = ({ children }) => {
	useYupDefaultMessage()
	return (
		<CardContextProvider>
			<div className="flex flex-col min-h-[100vh]">
				<Header />
				<main className="flex-grow md:mt-20">{children}</main>
				<AppFooter />
			</div>
			<ToastContainer autoClose={2000} />
		</CardContextProvider>
	)
}
