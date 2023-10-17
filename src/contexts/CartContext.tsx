'use client'
import React, { ReactNode } from 'react'
import { useLocalStorageState } from 'ahooks'
import { CoreProvider } from '../@Core/provider/CoreProvider'
import {  toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// interface ChangeCartInterface {
// 	id: string
// 	quantity: number
// }
// const ChangeCart = (params: ChangeCartInterface) => {
// 	const { id, quantity } = params
//   const [cart, setCart] = useLocalStorageState<AddCartInterface[]>('cart', {defaultValue: []})
// 	if (cart) {
// 		const index = cart.findIndex(item => item.id === id)
// 		if (index !== -1) {
// 			cart[index].quantity += quantity
//       setCart(cart)
// 		}
// 	}
// }

// interface RemoveCartInterface {
// 	id: string
// }
// const RemoveCart = (params: RemoveCartInterface) => {
// 	const { id } = params
//   const [cart, setCart] = useLocalStorageState<AddCartInterface[]>('cart', {defaultValue: []})
// 	if (cart) {
// 		const index = cart.findIndex(item => item.id === id)
// 		if (index !== -1) {
//       cart.splice(index, 1)
//       setCart(cart)
// 		}
// 	}
// }

type Props = {
	children: ReactNode
}

interface CartInterface {
	id: string
	product: any
	quantity: number
}
interface AddCartInterface {
	id: string
	product: any
	quantity: number
	quantityProduct: number
}

function CardContextProvider({ children }: Props) {
	const [cart, setCart] = useLocalStorageState<CartInterface[]>('cart', { defaultValue: [] })
	function addCart(params: AddCartInterface) {
		const { id, product, quantity, quantityProduct } = params
		if (cart) {
			const index = cart.findIndex(item => item.id === id)
			if (index !== -1) {
				const newQuantity = cart[index].quantity + quantity
				if (newQuantity <= quantityProduct) {
					cart[index].quantity = newQuantity
					setCart(cart)
					toast.success('Thêm thành công')
				} else toast.error('Số lượng sản phẩm không đủ')
			} else {
				cart.push({
					id,
					product,
					quantity
				})
				setCart(cart)
				toast.success('Thêm thành công')
			}
		} else {
			const newCart = [{ id, product, quantity }]
			setCart(newCart)
			toast.success('Thêm thành công')
		}
	}
	const data = { cart, addCart }
	return <CoreProvider {...data}>{children}</CoreProvider>
}
export default CardContextProvider
