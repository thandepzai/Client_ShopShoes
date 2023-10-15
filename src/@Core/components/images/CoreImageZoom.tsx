'use client'
import React, { useState } from 'react'
const src = 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0'

const CoreImageZoom: React.FC = () => {
	const [backgroundImage, setBackgroundImage] = useState<string>(`url(${src})`)
	const [backgroundPosition, setBackgroundPosition] = useState<string>('0% 0%')

	const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
		const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
		const x = ((e.pageX - left) / width) * 100
		const y = ((e.pageY - top) / height) * 100
		setBackgroundPosition(`${x}% ${y}%`)
	}

	return (
		<figure onMouseMove={handleMouseMove} style={{ backgroundImage, backgroundPosition }}>
			<img src={src} alt="Zoomed" />
		</figure>
	)
}

export default CoreImageZoom
