import { useEffect, useState } from 'react'
import { productService } from '../../services/productServices'
import { useRequest } from 'ahooks'

export const getData = () => {
	const {
		data: data,
		loading: loadingGetProduct,
		run: getProduct
	} = useRequest(productService.search, {
		manual: true
	})

	useEffect(() => {
		getProduct({ params: { page: 1, pageSize: 1000 } })
	}, [])

	return { products: data?.data, loadingGetProduct }
}
