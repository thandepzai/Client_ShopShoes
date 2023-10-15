import { CoreFieldSet } from '@/src/@Core/components'

const Price = (props: any) => {
	return (
		<div className="flex flex-col px-12 border-2 border-dashed rounded-md bg-blue-50">
			<div className="flex items-center gap-24">
				<span>Giá bán: </span>
				<span className="line-through text-[26px] text-gray-400">1.000.000 đ</span>
			</div>
			<div className="flex items-center gap-24">
				<span>Giá khuyến mại: </span>
				<span className="text-[32px] font-bold text-blue-400">1.000.000 đ</span>
			</div>
		</div>
	)
}
export default Price
