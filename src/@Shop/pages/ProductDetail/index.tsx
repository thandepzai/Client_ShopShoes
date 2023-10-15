'use client'
import React from 'react'
import ImageSection from './ImageSection'
import DetailsSection from './DetailsSection'
import { Benefits } from '@/src/@Core/components'
import SimilarProducts from './SimilarProducts'
import { IProduct } from '@/src/@Core/components/newest/productType'
import { newestProducts } from '@/src/@Core/components/newest/fakedata'
import { getData } from './SSRData'
import CoreSpinner from '@/src/@Core/components/spinner/CoreSpinner'
interface Props {
	product: IProduct
	products: IProduct[]
}
const ProductDetail: React.FC<Props> = ({ searchParams }: any) => {
	const id = searchParams?.id as string

	const { product } = getData(id)
	console.log('🚀 ~ file: index.tsx:17 ~ product:', product)

	const similarProductsList = newestProducts.slice(0, 10)

	return (
		<>
			{product === undefined ? (
				<div className="w-full flex justify-center mt-20">
					<CoreSpinner />
				</div>
			) : (
				<div className="flex flex-col">
					<div className="w-full xl:max-w-[2100px] mx-auto">
						<div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center md:items-start mt-8 relative">
							<ImageSection imgArray={product.images} />
							<DetailsSection product={product} />
						</div>
						<div className="border-2 my-8">
							<Benefits />
						</div>
						<SimilarProducts products={similarProductsList} />
					</div>
				</div>
			)}
		</>
	)
}

export default ProductDetail
