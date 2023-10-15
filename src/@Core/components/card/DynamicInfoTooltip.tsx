'use client'
import React, { memo, useState } from 'react'

interface DynamicInfoTooltipProps {
	id: string
}
const DynamicInfoTooltip: React.FC<DynamicInfoTooltipProps> = ({ id }) => {
	const [tooltipVisible, setTooltipVisible] = useState(false)
	const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

	const boxOffsetTop = document.getElementById(id)?.offsetTop
	console.log('🚀 ~ file: DynamicInfoTooltip.tsx:12 ~ boxOffsetTop:', boxOffsetTop)
	const boxOffsetLeft = document.getElementById(id)?.offsetLeft

	const handleMouseEnter = (event: React.MouseEvent) => {
		setTooltipVisible(true)
	}

	const handleMouseMove = (event: React.MouseEvent) => {
		setTooltipPosition({
			x: event.clientX - (boxOffsetLeft ?? 0) + 10,
			y: event.clientY - (boxOffsetTop && boxOffsetTop > 200 ? boxOffsetTop : 0) - 160
		})
		// setTooltipPosition({ x: event.clientX - (boxOffsetLeft ?? 0), y: event.clientY - (boxOffsetTop ?? 0) })
		// setTooltipPosition({ x: event.clientX, y: event.clientY })
	}

	const handleMouseLeave = () => {
		setTooltipVisible(false)
	}

	return (
		<>
			<div
				onMouseEnter={handleMouseEnter}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				className="absolute h-full w-full top-0 left-0 z-[1]"
			></div>
			{tooltipVisible && (
				<div
					className=" z-[99] h-[200px] w-[200px] fixed  z-999 px-3 py-2 max-w-[300px] text-sm block text-black bg-white rounded-lg shadow-xl"
					style={{
						left: tooltipPosition.x,
						top: tooltipPosition.y
					}}
				>
					DATA FETCH FROM API ádf ád fas df ádf ads fas df ád f ádf ád fas dfs ad
					<p>1</p>
					<p>1</p>
					<p>1</p>
					<p>1</p>
					<p>1</p>
					<p>1</p>
				</div>
			)}
		</>
	)
}

export default memo(DynamicInfoTooltip)
