'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useCoreContext } from '@/src/@Core/hooks/useAppContext'

const CartIcon = () => {
	const { cart } = useCoreContext()
	const [cartRead, setCartRead] = useState(cart)
	useEffect(() => {
		setCartRead(cart)
	}, [cart])
	return (
		<Link
			href="/cart"
			className="relative flex items-center ltr:md:pl-6 rtl:md:pr-6 rtl:md:border-r-2 rtl:md:border-r-slate-300 ltr:md:border-l-2 ltr:md:border-l-slate-300 z-50"
		>
			<AiOutlineShoppingCart style={{ fontSize: '1.6rem' }} />
			<span className="absolute -top-3 -right-[0.3rem] rtl:md:right-[1rem]  flex items-center justify-center w-5 h-5 rtl:pt-[0.1rem] rounded-full bg-palette-primary text-[0.75rem] leading-3 text-white shadow-lg">
				{cartRead.length}
			</span>
		</Link>
	)
}

export default CartIcon
