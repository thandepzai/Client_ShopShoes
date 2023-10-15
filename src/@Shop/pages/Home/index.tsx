'use client'
import { Carousel, Benefits } from '@/src/@Core/components'
import Brands from '@/src/@Core/components/brands'
import Newest from '@/src/@Core/components/newest/Newest'
import CoreSpinner from '@/src/@Core/components/spinner/CoreSpinner'
import React, { useEffect, useState } from 'react'
import { getData } from './SSRData'

const Home = () => {
	const { products, loadingGetProduct } = getData()
	console.log("🚀 ~ file: index.tsx:11 ~ Home ~ loadingGetProduct:", loadingGetProduct)
	console.log('🚀 ~ file: index.tsx:11 ~ Home ~ productForm:', products)

	return (
		<div>
			<Carousel />
			<Benefits />
			{products === undefined ? (
				<div className="w-full flex justify-center">
					<CoreSpinner />
				</div>
			) : (
				<Newest products={products}/>
			)}
			<Brands />
		</div>
	)
}
export default Home
