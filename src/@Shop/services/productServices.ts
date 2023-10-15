import { BaseService } from '@/src/@Core/service/BaseService'

class Product extends BaseService {}

export const productService = new Product('public/product')
