import { ImCheckboxChecked } from 'react-icons/im'
const BasicInfo = (props: any) => {
	return (
		<div className="w-full ">
			<p className="text-[16px] font-bold ">Thông số sản phẩm</p>
			<ul className="list-disc list-inside ">
				<li className="flex items-center gap-x-6">
					<ImCheckboxChecked className="text-green-600" />
					<span> 12312</span>
				</li>
				<li className="flex items-center gap-x-6">
					<ImCheckboxChecked className="text-green-600" />
					<span> 12312</span>
				</li>
				<li className="flex items-center gap-x-6">
					<ImCheckboxChecked className="text-green-600" />
					<span> 12312</span>
				</li>
				<li className="flex items-center gap-x-6">
					<ImCheckboxChecked className="text-green-600" />
					<span> 12312</span>
				</li>
			</ul>
		</div>
	)
}
export default BasicInfo
