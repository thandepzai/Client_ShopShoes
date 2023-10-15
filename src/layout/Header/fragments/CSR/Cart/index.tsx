import { memo } from 'react'
import { TfiShoppingCartFull } from 'react-icons/tfi'
const Cart: React.FC = () => {
	return (
		<div className="flex justify-end px-24">
			<div className="relative">
				<TfiShoppingCartFull className="text-[30px] text-blue-600 cursor-pointer" />
				<div className="absolute inline-flex items-center justify-center w-20 h-20 font-bold text-white bg-red-500 border-2 border-white rounded-full text-[12px] -top-6 -right-6 ">
					20
				</div>
			</div>
		</div>
	)
}

export default memo(Cart)
