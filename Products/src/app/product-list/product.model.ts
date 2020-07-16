export class ProductModel{
    constructor(
        public productId: number,
        public productName: string,
        public productCode: string,
        public releaseDate: string,
        public description: string,
        public price: string,
        public starRating: number,
        public imageUrl: string
    ){}
}