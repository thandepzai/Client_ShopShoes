import { CoreFieldSet } from '@/src/@Core/components'
import { CgGift } from 'react-icons/cg'
import { FaGifts } from 'react-icons/fa'
const Promotion = (props: any) => {
	return (
		<CoreFieldSet
			titleClassName="bg-red-600 rounded-md"
			title={
				<div
					className="flex items-center rounded-md gap-8 p-12 text-white text-[14px] bg-bgGradientAnimate animate-bgGradient bg-gradient-to-r
    from-red-500
    to-yellow-500"
				>
					<FaGifts />
					<span className="transform-none">Khuyến mãi</span>
				</div>
			}
			className="p-12 border-red-600"
		>
			<ul className="list-disc list-inside ">
				<li className="flex items-center gap-x-6">
					<CgGift className="text-red-600" />
					<span className="text-[14px]"> 12312</span>
				</li>
			</ul>
		</CoreFieldSet>
	)
}
export default Promotion
