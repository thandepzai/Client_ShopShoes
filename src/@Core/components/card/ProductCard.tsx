import clsx from 'clsx'
import Image from 'next/image'
import { memo } from 'react'
import { ProductCardProps } from '../../entities/product'
import Link from 'next/link'

interface Props {
	product?: ProductCardProps
	className?: string
	id: string
}

const ProductCard: React.FC<Props> = ({ product, id, className, ...restProps }) => {
	console.log('🚀 ~ file: ProductCard.tsx:14 ~ product:', product)
	const sort = product?.classifications?.sort((a, b) => a.price - b.price)
	let price: string = ''

	if (sort !== undefined && sort.length === 1) {
		price = `${sort[0].price.toLocaleString()} đ`
	} else if (sort !== undefined && sort.length > 1) {
		if (sort[0].price === sort[sort.length - 1].price) {
			price = `${sort[0].price.toLocaleString()} đ`
		} else {
			price = `${sort[0].price.toLocaleString()}-${sort[sort.length - 1].price.toLocaleString()}  đ`
		}
	}
	const images = JSON.parse(product?.images ?? '[]') as string[]
	return (
		<Link href={`/san-pham/${product?.name}?id=${id}`}>
			<div
				className={clsx([
					className,
					' w-full group relative flex flex-col gap-y-12 p-8 shadow-md rounded-md border transition-all duration-400 cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:scale-[1.01]'
				])}
				id={id}
				{...restProps}
			>
				<div className="z-0 flex gap-6 mx-4">
					<span className="w-8 h-8 bg-red-500 rounded-full"></span>
					<span className="w-8 h-8 bg-green-500 rounded-full"></span>
					<span className="w-8 h-8 bg-yellow-500 rounded-full"></span>
				</div>
				<div className="relative aspect-[1/1] w-[99%] mx-auto">
					<Image quality={100} alt={product?.name ?? ''} fill className="rounded-md" src={images[0]} />
				</div>

				<div>
					<p className="truncate">{product?.name}</p>
					<p className="font-bold text-blue-500 text-end text-[1.4rem]">{price}</p>
				</div>

				<span className="absolute top-0 left-0 z-0 w-0 h-0 transition-all duration-500 border-t-2 border-blue-400 ease group-hover:w-full"></span>
				<span className="absolute top-0 right-0 z-0 w-0 h-0 transition-all duration-500 delay-500 border-r-2 border-red-400 ease group-hover:h-full"></span>
				<span className="absolute bottom-0 right-0 z-0 w-0 h-0 transition-all duration-500 border-b-2 border-green-400 ease group-hover:w-full"></span>
				<span className="absolute bottom-0 left-0 z-0 w-0 h-0 transition-all duration-500 delay-500 border-l-2 border-yellow-400 ease group-hover:h-full"></span>

				{/* <DynamicInfoTooltip id={id} /> */}
			</div>
		</Link>
	)
}

export default memo(ProductCard)
