'use client'

import { CommonTable } from '@/src/@Core/components'
import SuccessFormal from '@/src/@Core/components/animations/SuccessFormal'
import CoreModal from '@/src/@Core/components/modal/CoreModal'
import { ColumnProps } from '@/src/@Core/components/table/CoreTable'
import React, { useMemo, useState } from 'react'

const CartTable = (props: any) => {
	const [openDetailModal, setOpenDetailModal] = useState(false)
	console.log('🚀 ~ file: ConfigInfoTable.tsx:10 ~ ConfigInfoTable ~ openDetailModal:', openDetailModal)
	const columns: ColumnProps[] = [
		{
			key: 'index',
			header: ''
		},
		{
			key: 'image',
			header: '',
			render: row => <div className="w-[100px] h-[100px]">1</div>
		},
		{
			key: 'name',
			header: 'Tên sản phẩm'
		},
		{
			key: 'amount',
			header: 'Số lượng'
		},
		{
			key: 'price',
			header: 'Giá'
		}
	]

	const data = [
		{
			index: 0,
			image: 'Intel core i7',
			name: 'Intel core i7',
			amount: 'Intel core i7',
			price: 'Intel core i7'
		},
		{
			index: 1,
			image: 'san pham 2 anh',
			name: 'san pham 2',
			amount: 1,
			price: 10000
		}
	]
	return (
		<div className="flex flex-col gap-12 p-12 bg-white rounded-md">
			<h3 className="font-bold text-blue-500">Giỏ hàng của bạn</h3>
			<hr />
			<CommonTable rowCheckBox={true} columns={columns} data={data} />
			<button
				onClick={() => setOpenDetailModal(true)}
				className="py-8 text-white bg-blue-500 rounded-md hover:bg-blue-600"
			>
				Xem cấu hình chi tiết
			</button>
			<CoreModal title={'THong sads'} open={openDetailModal} handleClose={() => setOpenDetailModal(false)}>
				<CommonTable columns={columns} data={data} />
			</CoreModal>
		</div>
	)
}

export default React.memo(CartTable)
