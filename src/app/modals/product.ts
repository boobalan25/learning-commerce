import { ProductDetails } from "./product-details";
import { Review } from "./review";

export class Product {
    availableCount: number = 0;
    description: string = '';
    discountPercent: number = 0;
    gender: string = '';
    homepageProduct: boolean = false;
    id: string = '';
    name: string = '';
    price: number = 0;
    productDetails: ProductDetails = new ProductDetails();
    productId: string = '';
    reviews: Review[] = [];
}