import { CoreProvider } from '@/src/@Core/provider/CoreProvider'
import React from 'react'

const CartProvider: React.FC = (props?: any) => {
	const data = {
		...props
	}

	return <CoreProvider {...data}>{props?.children}</CoreProvider>
}

export default React.memo(CartProvider)
