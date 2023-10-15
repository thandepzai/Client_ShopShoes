'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CardActions from './CardActions'
import StarRatingComponent from 'react-star-rating-component'

interface Props {
	product: any
}

const Card: React.FC<Props> = ({ product }) => {
	const listImages = JSON.parse(product.images) as string[]
	const prices = product.sizeProduct.map((item: { price: number }) => item.price)
	const minPrices = Math.min(...prices).toLocaleString('vi-VN', { style: 'currency', currency: 'VND', currencyDisplay: 'code' });

	return (
		<div className="col-span-6 sm:col-span-3 md:col-span-4 xl:col-span-3 shadow-xl my-1 md:my-4 ltr:mr-2 rtl:ml-1 md:mx-6  bg-palette-card rounded-xl flex relative">
			<Link href={`${product.id}`} className="flex md:items-center md:flex-col relative w-full">
				<div className="w-1/2 md:w-full relative bg-slate-400/30 px-1 md:px-6 py-2 rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none rtl:order-2 rtl:md:order-none flex flex-col justify-between items-center">
					<div className="flex items-center w-280 h-300">
						<img
							src={listImages[0]}
							className=" drop-shadow-xl hover:scale-110 transition-transform duration-300 ease-in-out !py-2 w-60 h-64 object-fill sm:h-48 md:h-60 lg:h-72"
						/>
					</div>
					{/* {product?.discount ? (
						<span className="w-8 sm:w-auto block absolute -top-2 -right-2">
							<Image
								src="/images/discount-icon/discount.webp"
								width={40}
								height={40}
								alt="discount-icon"
							/>
						</span>
					) : null} */}
				</div>
				<div className="flex flex-col justify-between  flex-grow  w-1/2 md:w-full  px-1 md:px-3 py-2 md:py-4">
					<div className="flex justify-center md:justify-start flex-col  flex-grow overflow-hidden">
						<div className="self-center">
							<StarRatingComponent name={product.name} starCount={5} value={product.rate} />
						</div>
						<h3 className="text-sm sm:text-[12px] md:text-sm text-center text-palette-mute  ">
							{product.name}
						</h3>
					</div>
					<div className="flex rtl:justify-end rtl:self-end ltr:self-start text-left mt-2">
						<div>
							<div
								className="flex items-center text-md md:text-lg font-bold no-underline"
								style={{ flexDirection: 'row' }}
							>
								<sup className="mr-1 rtl:block">₫</sup>
								<span>{minPrices}</span>
								<sub className="ml-1 text-[10px]" />
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default Card
