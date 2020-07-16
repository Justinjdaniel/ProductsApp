import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title:String = "Product List";

  products: ProductModel[];

  imageWidth: number = 50;
  imageMargin: number = 2;

  showImage: boolean =false;

  constructor(private productService: ProductService) { }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
      this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
      console.log(this.products) //
    })
  }

}
