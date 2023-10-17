import { useEffect } from 'react'
import { productService } from '../../services/productServices'
import { useRequest } from 'ahooks'

export const getData = (id: string) => {
	const { data: data, run: getProduct } = useRequest(productService.find, {
		manual: true
	})

	useEffect(() => {
		getProduct(id)
	}, [])
	return { product: data?.data?.product }
}
