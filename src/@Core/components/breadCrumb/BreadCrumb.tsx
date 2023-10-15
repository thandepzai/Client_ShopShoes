import Link from 'next/link'
import { ReactElement } from 'react'

export interface CrumbProps {
	icons?: ReactElement
	label?: string
	link?: string
}

export interface BreadCrumbProps {
	list: CrumbProps[]
}

export function BreadCrumb({ list }: BreadCrumbProps) {
	return (
		<div className="flex gap-x-8">
			<Link href={'/'} className="text-blue-500">
				Trang chủ {`> `}
			</Link>
			{list.map((item, i) => {
				if (i < list.length - 1) {
					return (
						<Link key={`crumb ${i}`} href={item.link ?? '#'} className="text-blue-500">
							{item.icons} {item.label} {'>'}
						</Link>
					)
				} else {
					return <label key={`crumb ${i}`}>{item.label}</label>
				}
			})}
		</div>
	)
}
