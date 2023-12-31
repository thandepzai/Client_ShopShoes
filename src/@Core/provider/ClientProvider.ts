'use client'
import { useStorage } from '@/src/hooks'
import { SESSION_SERVICE, SIMILAR_SERVICE, STORAGE } from '@/src/const/app-const'
import { useCartContext } from '@/src/contexts/CartContext'
import { BaseService } from '@/src/@Core/service/BaseService'
import { useRequest } from 'ahooks'
import { useEffect } from 'react'

class ProductSession extends BaseService {}
const productSessionService = new ProductSession(SESSION_SERVICE)
const productSimilarService = new ProductSession(SIMILAR_SERVICE)

interface ProductSession {
	code: string
}

export const clientProvider = () => {
	const [productView, setProductView] = useStorage(STORAGE.SESSION, 'productView', [])
	const { cart } = useCartContext()
	const [productOrder] = useStorage(STORAGE.LOCAL, 'order', [])
	const productSessionOld: ProductSession[] = []

	productOrder.forEach((item: any) => {
		if (item !== null) {
			const codeProduct = item.codeProduct
			productSessionOld.push(...codeProduct)
		}
	})

	cart.forEach((item: any) => {
		productSessionOld.push(item.product.code)
	})

	function addProductView(code: string) {
		if (productView.length === 0 || productView[productView.length - 1] !== code) {
			const newProductView = [...productView, code]
			setProductView(newProductView)
		}
	}

	return { productView, addProductView, productSessionOld }
}

export const getSession = () => {
	const { productSessionOld, productView } = clientProvider()
	const { data: data, run: getSuggestProduct } = useRequest(productSessionService.suggestProduct, {
		manual: true
	})

	useEffect(() => {
		const productSession = productView.length ? productView : productSessionOld
		getSuggestProduct({ 'product-view': productSession })
	}, [])

	return { productSuggest: data?.data }
}

export const getSimilar = (code: string) => {
	const { productView, addProductView } = clientProvider()

	const { data: data, run: getSimilarProduct } = useRequest(productSimilarService.suggestProduct, {
		manual: true
	})

	useEffect(() => {
		addProductView(code)
		getSimilarProduct({ 'product-view': productView, 'product-code': [code] })
	}, [])

	return { productSimilar: data?.data }
}
