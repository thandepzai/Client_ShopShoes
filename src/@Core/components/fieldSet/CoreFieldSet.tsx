'use client'
import clsx from 'clsx'
import { ReactNode } from 'react'
interface CoreFieldSetProps {
	title?: ReactNode
	children: ReactNode
	className?: string
	titleClassName?: string
}

const CoreFieldSet: React.FC<CoreFieldSetProps> = props => {
	const { title, children, className, titleClassName } = props
	return (
		<fieldset className={clsx(['border-2 w-full mx-auto rounded-md bg-white', className && className])}>
			{title && (
				<legend
					className={clsx([
						titleClassName ? titleClassName : 'p-8 text-white uppercase bg-blue-400 rounded-t-md'
					])}
				>
					{title}
				</legend>
			)}
			{children}
		</fieldset>
	)
}

export default CoreFieldSet
