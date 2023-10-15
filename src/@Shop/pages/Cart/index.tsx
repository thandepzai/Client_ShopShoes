import CartProvider from './CartProvider'
import CartTable from './fragments/CSR/CartTable'

const Cart = (props: any) => {
	return (
		<div className="flex flex-col px-12 py-12 rounded-md gap-y-12">
			<div className="p-8 bg-white rounded-md">
				<CartTable />
			</div>
		</div>
	)
}
export default Cart
