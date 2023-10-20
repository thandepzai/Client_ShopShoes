'use client'
import { SubmitHandler } from 'react-hook-form'
import ImportInfo from './importInfo'

interface Inputs {
	name: string
	email: string
	phone: number
	address: string
	paymentMethod: string
}

const PaymentOrder: React.FC = () => {
	const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

	return (
		<div className="py-10 px-5 bg-stone-50 border border-solid max-w-7xl my-2 mx-auto">
			<ImportInfo onSubmit={onSubmit} />
		</div>
	)
}

export default PaymentOrder
