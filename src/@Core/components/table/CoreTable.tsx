'use client'

import { useUpdateEffect } from 'ahooks'
import React, { ReactNode, useState } from 'react'

export interface ColumnProps {
	header: ReactNode
	key: string
	render?: (data: any) => ReactNode
}

interface CoreTableProps {
	columns: ColumnProps[]
	data: any[]
	rowCheckBox?: Boolean
	hideHeader?: Boolean
	getCheckedItems?: (data: any[]) => void
}

const CoreTable: React.FC<CoreTableProps> = ({
	columns,
	data,
	rowCheckBox = false,
	hideHeader = false,
	getCheckedItems = () => 1
}) => {
	const [checkedItems, setCheckedItems] = useState<any[]>([])

	const handleCheckAll = (checked: boolean) => {
		setCheckedItems(checked ? data : [])
	}

	const handleCheckItem = (checked: boolean, index: number) => {
		const item = data[index]

		setCheckedItems(prev => {
			if (checked) {
				return [...prev, item]
			} else {
				return prev.filter(item => item.index !== index)
			}
		})
	}

	useUpdateEffect(() => {
		getCheckedItems && getCheckedItems(checkedItems)
	}, [checkedItems])

	return (
		<div className="relative p-6 overflow-x-auto rounded-md shadow-lg">
			<table className="w-full text-sm text-left text-gray-500">
				{!hideHeader && (
					<thead className="text-xs text-white uppercase bg-blue-500 ">
						<tr>
							{rowCheckBox && (
								<th scope="col" className="p-4">
									<div className="flex items-center gap-4 p-4 bg-white rounded-sm">
										<input
											type="checkbox"
											onChange={e => handleCheckAll(e.target.checked)}
											checked={checkedItems.length === data.length}
											className="text-blue-600 bg-gray-100 border-2 border-white w-22 h-22 focus:ring-blue-500 dark:focus:ring-blue-600 "
										/>
									</div>
								</th>
							)}

							{columns.map(column => {
								const { header, key } = column
								return (
									key !== 'index' && (
										<th key={`header table ${key}`} scope="col" className="px-6 py-3">
											{header}
										</th>
									)
								)
							})}
						</tr>
					</thead>
				)}

				<tbody>
					{data.map((item, index) => {
						return (
							<tr
								key={`tr table ${index}`}
								className="bg-white border-b cursor-default light hover:bg-gray-200"
							>
								{rowCheckBox && (
									<td className="w-4 p-4 px-2 py-6">
										<div className="flex items-center px-2">
											<input
												checked={checkedItems.some(item => item.index === index)}
												onChange={e => handleCheckItem(e.target.checked, index)}
												type="checkbox"
												className="w-20 h-20 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
											/>
										</div>
									</td>
								)}
								{columns.map(column => {
									const { render, key } = column
									return (
										key !== 'index' && (
											<td key={`row-${key}-${index}`} className="px-2 py-6">
												{(render && render(item)) ?? item[key] ?? ''}
											</td>
										)
									)
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

// ;<td className="flex items-center px-6 py-4 space-x-3">
// 	<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
// 		Edit
// 	</a>
// 	<a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
// 		Remove
// 	</a>
// </td>

export default React.memo(CoreTable)
