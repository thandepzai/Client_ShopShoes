import ProductDetail from '@/src/@Shop/pages/ProductDetail'
import { productService } from '@/src/@Shop/services/productServices'
import { Metadata, ResolvingMetadata } from 'next'
type Props = {
	searchParams: { id: string }
}
export async function generateMetadata({ searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
	console.log('🚀 ~ file: SEO.tsx:8 ~ SEO ~ searchParams:', searchParams)
	const { id } = searchParams
	const product = await productService.find({
		id
	})
	const images = JSON.parse(product?.data?.images)
	return {
		title: product?.data?.name,
		icons: images[0],
		description: product?.data?.seo,
		openGraph: {
			images
		}
	}
}
export default ProductDetail
